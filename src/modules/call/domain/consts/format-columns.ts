import { CallStatus, CallType } from "../types";

export const statusLabel: Record<CallStatus, string> = {
  "in queue": "В очереди",
  "in progress": "В работе",
  finished: "Готово",
};

export const typeLabel: Record<CallType, string> = {
  error: "Ошибка",
  recommendation: "Рекомендация",
  remark: "Замечание",
};

export const statusStyle: Record<CallStatus, string> = {
  "in queue": "bg-slate-400",
  "in progress": "bg-amber-500",
  finished: "bg-green-500",
};
