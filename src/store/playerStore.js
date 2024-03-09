import { create } from "zustand";


export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentMusic: "cyberpunk2077",
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
}))