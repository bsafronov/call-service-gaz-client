import { Schema } from "@/components/CallForm";
import { Call } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const BASE_URL = "localhost:3000";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

const callService = {
  createCall: async (data: Schema) => {
    const res = await api.post<Call>("/calls", data);
    return res.data;
  },
  fetchCalls: async () => {
    const res = await api.get<Call[]>("/calls");
    return res.data;
  },
};

export const useFetchCalls = () => {
  return useQuery({
    queryKey: ["calls"],
    queryFn: callService.fetchCalls,
  });
};

export const useCreateCall = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["calls"],
    mutationFn: callService.createCall,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["calls"] });
    },
  });
};
