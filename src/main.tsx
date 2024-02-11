import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { CallNewModal } from "./modules/call/ui/call-new.modal.tsx";
import { Toaster } from "./shared/ui/sonner.tsx";
import { CallExistedModal } from "./modules/call/ui/call-existed.modal.tsx";
import "@/shared/styles/index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CallNewModal />
      <CallExistedModal />
      <Toaster />

      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
