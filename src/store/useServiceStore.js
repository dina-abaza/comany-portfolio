
import { create } from "zustand";

export const useServiceStore = create((set) => ({
  selectedService: null,
  setSelectedService: (service) => set({ selectedService: service }),
}));