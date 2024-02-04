import { Call, CreateCallDTO } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export const BASE_URL = "http://localhost:3000/api";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

const callService = {
  createCall: async (data: CreateCallDTO) => {
    const res = await api.post<Call>("/calls", data);
    return res.data;
  },
  fetchCalls: async () => {
    const res = await api.get<Call[]>("/calls");
    return res.data;
  },
  fetchCall: async (id: Call["id"]) => {
    const res = await api.get<Call>(`/calls/${id}`);
    return res.data;
  },
};

export const useFetchCalls = () => {
  return useQuery({
    queryKey: ["calls"],
    queryFn: callService.fetchCalls,
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
