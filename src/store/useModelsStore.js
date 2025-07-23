import { create } from "zustand";

const useModalsStore = create((set) => ({
  modals: {},
  toggle: (id) =>
    set((s) => ({
      modals: { ...s.modals, [id]: !s.modals[id] },
    })),
}));

export default useModalsStore;