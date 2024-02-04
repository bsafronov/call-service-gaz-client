export type CallStatus = "in queue" | "in progress" | "finished";
export type CallType = "error" | "recommendation" | "remark";
export type Call = {
  id: string;
  createdAt: number;
  author: string;
  description: string;
  callType: CallType;
  callStatus: CallStatus;
};

export type CreateCallDTO = Omit<Call, "id" | "createdAt" | "callStatus">;
