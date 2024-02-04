import { Call } from "@/types";
import { create } from "zustand";

type Props = {
  open: boolean;
  toggle: () => void;
};

export const useNewCallModal = create<Props>()((set, get) => ({
  open: false,
  toggle: () => set({ open: !get().open }),
}));

type ExistedProps = {
  callId: Call["id"] | null;
  open: boolean;
  setCall: (id: Call["id"] | null) => void;
};

export const useExistedCallModal = create<ExistedProps>()((set) => ({
  callId: null,
  open: false,
  setCall: (id) => {
    if (id) {
      set({
        callId: id,
        open: true,
      });
    } else {
      set({
        callId: null,
        open: false,
      });
    }
  },
}));
