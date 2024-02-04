import { useNewCallModal } from "@/store";
import { Plus } from "lucide-react";

export const CallTrigger = () => {
  const toggle = useNewCallModal().toggle;
  return (
    <div className="flex justify-end">
      <button
        className="flex gap-2 items-center text-primary font-semibold"
        onClick={toggle}
      >
        <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
        Создать обращение
      </button>
    </div>
  );
};
