import { create } from "zustand";
import axios from "axios";

const useBlogStore = create((set, get) => {
  const storedToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return {
    data: [],
    oneUserData: [],
    singleData: {},
    loading: false,
    error: null,
    token: storedToken,
    isLikeMap: {},

    initSocketListeners: (socket) => {
      if (!socket) return;

      socket.on("new_blog", (blog) => {
        set((state) => ({
          data: [blog, ...state.data],
        }));
      });
      socket.on("new_blog", (blog) => {
        console.log("Received new_blog event", blog); // ✅ Log to confirm
      });      

      socket.on("update_blog", (updatedBlog) => {
        set((state) => ({
          data: state.data.map((blog) =>
            blog._id === updatedBlog._id ? updatedBlog : blog
          ),
        }));
      });

      socket.on("delete_blog", (deletedBlogId) => {
        set((state) => ({
          data: state.data.filter((blog) => blog._id !== deletedBlogId),
        }));
      });

      socket.on("like_blog", ({ blogId, likes }) => {
        set((state) => ({
          data: state.data.map((blog) =>
            blog._id === blogId ? { ...blog, likes } : blog
          ),
        }));
      });
    },

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
    getSingleUserBlog: async (authorId) => {
      set({ loading: true, error: null });
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}main/author/${authorId}`
        );
        console.log(data, "Current User All Blog");
        set({ oneUserData: data, loading: false });
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
        const { getBlog } = get();

        const response = await axios.delete(
          `${import.meta.env.VITE_API_BASE_URL}main/${id}`
        );
        console.log(response, "Blog Delete Successfully");
        await getBlog();
        set({ loading: false });
      } catch (error) {
        set({
          error: error.response?.data?.message || error.message,
          loading: false,
        });
      }
    },
    likeBlog: async (blogId, userId, slug) => {
      set({ loading: true, error: null });
      try {
        const { token, getBlog, isLikeMap, getSingleSlugBlog } = get();
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}main/${blogId}/like`,
          { userId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const isLiked = response.data?.liked ?? false;

        await getBlog();
        await getSingleSlugBlog(slug);

        set({
          loading: false,
          isLikeMap: {
            ...isLikeMap,
            [blogId]: isLiked,
          },
        });
      } catch (error) {
        set({
          error: error.response?.data?.message || error.message,
          loading: false,
        });
      }
    },
    editBlog: async (blogId, blogData) => {
      set({ loading: true, error: null });
      try {
        const data = await axios.put(
          `${import.meta.env.VITE_API_BASE_URL}main/${blogId}`,
          blogData
        );
        console.log(data, "Blog Updated Successfully");
        set({ loading: false });
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
