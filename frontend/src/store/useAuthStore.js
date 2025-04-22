import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set, get) => {
  const storedToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return {
    user: null,
    token: storedToken,
    loading: false,
    error: null,

    login: async (credentials) => {
      set({ loading: true, error: null });
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}auth/login`,
          credentials
        );
        console.log(response, "Login Response");
        const { token } = response.data;
        localStorage.setItem("token", token);

        set({ token, loading: false });
      } catch (error) {
        set({
          error: error.response?.data?.message || error.message,
          loading: false,
        });
      }
    },

    register: async (userData) => {
      set({ loading: true, error: null });
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}auth/register`,
          userData
        );
        console.log("RegisterResponse", data);
      } catch (error) {
        set({
          error: error.response?.data?.message || error.message,
          loading: false,
        });
      }
    },
    getProfile: async () => {
      set({ loading: true, error: null });
      try {
        const { token } = get();
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}auth/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data, "Successfully Fetch Profile Data");
        set({ user: data, loading: false });
      } catch (error) {
        set({
          error: error?.data?.message || error.message,
          loading: false,
        });
      }
    },

    logout: () => {
      localStorage.removeItem("token");
      set({ user: null, token: null });
    },
  };
});

export default useAuthStore;
