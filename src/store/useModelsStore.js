import { create } from 'zustand';

const useModelsStore = create((set) => ({
  isOpen: false,
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
}));

export default useModelsStore;
