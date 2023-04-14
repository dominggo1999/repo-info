import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  setIsOpen: (val: boolean) => set(() => ({ isOpen: val })),
}));

export default useSidebarStore;
