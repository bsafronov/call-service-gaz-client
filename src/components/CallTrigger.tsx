import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { CallForm } from "./CallForm";

export const CallTrigger = () => {
  return (
    <div className="flex justify-end">
      <Dialog>
        <DialogTrigger className="flex items-center gap-2 text-primary font-semibold group">
          <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
          Создать обращение
        </DialogTrigger>
        <DialogContent>
          <CallForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};
