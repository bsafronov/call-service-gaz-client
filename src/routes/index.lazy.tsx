import { CallTable, CallTrigger } from "@/modules/call";
import { createLazyFileRoute } from "@tanstack/react-router";

const HomePage = () => {
  return (
    <div className="mt-16 mx-auto max-w-screen-xl px-4">
      <CallTrigger />
      <CallTable />
    </div>
  );
};

export const Route = createLazyFileRoute("/")({
  component: HomePage,
});
