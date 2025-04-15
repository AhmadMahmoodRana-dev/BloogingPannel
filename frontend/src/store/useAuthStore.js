import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => {
  const storedToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return {
    user: null,
    token: storedToken,
    loading: false,
    error: null,

    login: async (credentials) => {
      set({ loading: true, error: null });
      try {
        const response = await axios.post(
          "http://localhost:4000/api/auth/login",
          credentials
        );
        console.log(response, "Login Response");
        const { token } = response.data;

        // Save token to localStorage
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
          "http://localhost:4000/api/auth/register",
          userData
        );
        set({ user: data, loading: false });
        console.log("RegisterResponse", data);
      } catch (error) {
        set({
          error: error.response?.data?.message || error.message,
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
