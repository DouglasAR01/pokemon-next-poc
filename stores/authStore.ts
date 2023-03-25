import { create } from "zustand";

interface AuthStore {
  user: Object | null,
  isLoggedIn: boolean,
  login: (user: Object) => void,
  logout: () => void,
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoggedIn: false,

  login: (user) =>
    set(() => ({
      user,
      isLoggedIn: true,
    })),
  
  logout: () => 
    set(() => ({
      user: null,
      isLoggedIn: false
    }))
}));

export default useAuthStore;