import { create } from "zustand";
import { Call } from "../types";

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
