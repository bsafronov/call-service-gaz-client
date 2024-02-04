import { useNewCallModal } from "@/store";
import { Dialog, DialogContent } from "./ui/dialog";
import { CallForm } from "./CallForm";

export const NewCallModal = () => {
  const { open, toggle } = useNewCallModal();
  return (
    <Dialog open={open} onOpenChange={toggle}>
      <DialogContent>
        <CallForm />
      </DialogContent>
    </Dialog>
  );
};
