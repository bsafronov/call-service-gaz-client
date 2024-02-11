import { CallView } from "./call-view";
import { Dialog, DialogContent } from "../../../shared/ui/dialog";
import { useExistedCallModal } from "../domain/hooks/use-existed-call-modal";

export const CallExistedModal = () => {
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
