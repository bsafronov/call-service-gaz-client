import { CallTable, CallTrigger } from "@/modules/call";
import { createLazyFileRoute } from "@tanstack/react-router";

const HomePage = () => {
  return (
    <div className="mt-16">
      <CallTrigger />
      <CallTable />
    </div>
  );
};

export const Route = createLazyFileRoute("/")({
  component: HomePage,
});
