import { CallTable, CallTrigger } from "@/modules/call";

export const HomePage = () => {
  return (
    <main className="mt-16 mx-auto max-w-screen-xl px-4">
      <CallTrigger />
      <CallTable />
    </main>
  );
};
