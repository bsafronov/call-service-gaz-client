import { create } from "zustand";

type Props = {
  open: boolean;
  toggle: () => void;
};

export const useNewCallModal = create<Props>()((set, get) => ({
  open: false,
  toggle: () => set({ open: !get().open }),
}));
