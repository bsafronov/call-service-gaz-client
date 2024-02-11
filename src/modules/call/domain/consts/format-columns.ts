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
  "in queue": "bg-slate-200",
  "in progress": "bg-amber-300",
  finished: "bg-emerald-300",
};
