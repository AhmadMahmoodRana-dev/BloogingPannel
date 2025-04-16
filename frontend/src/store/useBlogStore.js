import { create } from "zustand";
import axios from "axios";

const useBlogStore = create((set, get) => {
  const storedToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return {
    data: [],
    loading: false,
    error: null,
    token: storedToken,

    addBlog: async (blogData) => {
      set({ loading: true, error: null });
      try {
        const { token } = get();
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}main/created`,
          blogData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response, "SucessFully Add Blog");

        // Optionally update the blog list in state
        set((state) => ({
          data: [response.data.blog, ...state.data],
          loading: false,
        }));
      } catch (error) {
        set({
          error: error.response?.data?.message || error.message,
          loading: false,
        });
      }
    },
  };
});

export default useBlogStore;
