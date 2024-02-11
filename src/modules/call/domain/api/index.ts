import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { Call, CreateCallDTO } from "../types";
import { api } from "@/shared/api";

const callService = {
  createCall: async (data: CreateCallDTO) => {
    const res = await api.post<Call>("/calls", data);
    return res.data;
  },
  fetchCalls: async ({ pageParam = 0 }) => {
    const res = await api.get<Call[]>(`/calls?take=100&skip=${pageParam}`);
    return { calls: res.data, prevOffset: pageParam };
  },
  fetchCall: async (id: Call["id"]) => {
    const res = await api.get<Call>(`/calls/${id}`);
    return res.data;
  },
};

export const useFetchCalls = () => {
  return useInfiniteQuery({
    queryKey: ["calls"],
    queryFn: callService.fetchCalls,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.calls.length < 100) {
        return undefined;
      }

      return lastPage.prevOffset + 100;
    },
  });
};

export const useFetchCall = (id: Call["id"]) => {
  return useQuery({
    queryKey: ["calls", id],
    queryFn: () => callService.fetchCall(id),
  });
};

export const useCreateCall = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["calls"],
    mutationFn: callService.createCall,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["calls"] });
      toast.success("Обращение добавлено!");
    },
    onError: () => toast.error("Возникла ошибка при добавлении обращения"),
  });
};
