import { Dialog, DialogContent } from "../../../shared/ui/dialog";
import { useNewCallModal } from "../domain/hooks/use-new-call-modal";
import { CallForm } from "./call-form";

export const CallNewModal = () => {
  const { open, toggle } = useNewCallModal();
  return (
    <Dialog open={open} onOpenChange={toggle}>
      <DialogContent>
        <CallForm />
      </DialogContent>
    </Dialog>
  );
};
