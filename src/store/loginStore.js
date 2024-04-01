import { create } from "zustand";

const useLoginStore = create((set) => ({
	user: JSON.parse(localStorage.getItem("userInfo")),
	login: (user) => set({ user }),
	logout: () => set({ user: null }),
	setUser: (user) => set({ user }),
}));

export default useLoginStore;
