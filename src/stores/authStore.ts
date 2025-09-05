import { create } from "zustand";
import { User, AuthState } from "@/types";

interface AuthStore extends AuthState {
  // Actions
  setAuthenticated: (isAuthenticated: boolean) => void;
  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  login: (user: User) => void;
  logout: () => void;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
};

export const useAuthStore = create<AuthStore>((set) => ({
  ...initialState,

  setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  login: (user) =>
    set({
      isAuthenticated: true,
      user,
      isLoading: false,
      error: null,
    }),
  logout: () => set(initialState),
}));
