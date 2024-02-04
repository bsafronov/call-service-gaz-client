import { useExistedCallModal } from "@/store";
import { CallView } from "./CallView";
import { Dialog, DialogContent } from "./ui/dialog";

export const ExistedCallModal = () => {
  const { open, setCall, callId } = useExistedCallModal();

  if (!callId) return null;

  return (
    <Dialog open={open} onOpenChange={() => setCall(null)}>
      <DialogContent>
        <CallView callId={callId} />
      </DialogContent>
    </Dialog>
  );
};
