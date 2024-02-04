import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import { NewCallModal } from "./components/NewCallModal.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import "./index.css";
import { ExistedCallModal } from "./components/ExistedCallModal.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NewCallModal />
      <ExistedCallModal />
      <Toaster />
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
