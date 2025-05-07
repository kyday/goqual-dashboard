import { create } from "zustand";

interface ControlState {
  brightness: number;
  setBrightness: (brightness: number) => void;
}

export const useControlStore = create<ControlState>()((set) => ({
  brightness: 50,
  setBrightness: (brightness) => set({ brightness }),
}));
