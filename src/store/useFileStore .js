import { create } from 'zustand';

const useFileStore = create((set) => ({
  selectedFile: null,
  setSelectedFile: (file) => set({ selectedFile: file }),
  detailsOpen: false,
  setDetailsOpen: (open) => set((state) => ({
    detailsOpen: open,
    selectedFile: open ? state.selectedFile : null
  })),
}));

export default useFileStore;
