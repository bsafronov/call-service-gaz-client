export type CallStatus = "in queue" | "in progress" | "finished";
export type CallType = "error" | "recommendation" | "remark";
export type Call = {
  id: string;
  date: string;
  callType: CallType;
  author: string;
  description: string;
  status: CallStatus;
};
