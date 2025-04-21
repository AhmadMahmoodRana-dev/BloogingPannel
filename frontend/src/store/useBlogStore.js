import { create } from "zustand";
import axios from "axios";

const useBlogStore = create((set, get) => {
  const storedToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return {
    data: [],
    singleData:{},
    loading: false,
    error: null,
    token: storedToken,

    addBlog: async (blogData) => {
      set({ loading: true, error: null });
      try {
        const { token, getBlog } = get();
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}main/created`,
          blogData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response, "Successfully Added Blog");
        // Instead of pushing data manually, just fetch all blogs again
        await getBlog();

        set({ loading: false });
      } catch (error) {
        set({
          error: error.response?.data?.message || error.message,
          loading: false,
        });
      }
    },

    getBlog: async () => {
      set({ loading: true, error: null });
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}main/`
        );
        console.log(data, "All Blog");
        set({ data: data, loading: false });
      } catch (error) {
        set({
          error: error.response?.data?.message || error.message,
          loading: false,
        });
      }
    },
    getSingleSlugBlog: async (slug) => {
      set({ loading: true, error: null });
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}main/${slug}`
        );
        console.log(data, "Single Slug Blog");
        set({ singleData: data, loading: false });
      } catch (error) {
        set({
          error: error.response?.data?.message || error.message,
          loading: false,
        });
      }
    },
    deleteBlog: async (id) => {
      set({ loading: true, error: null });
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_API_BASE_URL}main/${id}`
        );
        console.log(response,"Blog Delete Successfully");
        await getBlog();
        set({loading: false });
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
