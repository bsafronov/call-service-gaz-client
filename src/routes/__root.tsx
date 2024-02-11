import { CallExistedModal, CallNewModal } from "@/modules/call";
import { Toaster } from "@/shared/ui/sonner";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <Providers>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="grow container">
          <Outlet />
        </main>
      </div>
    </Providers>
  ),
});

const Providers = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <CallNewModal />
      <CallExistedModal />
      <Toaster />
      <TanStackRouterDevtools />
      {children}
    </>
  );
};

const Header = () => {
  return (
    <header className="py-4 bg-primary flex items-center justify-center">
      <div className="container flex justify-between items-center text-primary-foreground">
        <Link to={"/"} className="text-4xl font-semibold">
          CallService
        </Link>
        <div className="flex gap-4 font-semibold">
          <Link
            to={"/"}
            className="relative after:h-0.5 after:transparent after:rounded-md after:absolute after:-bottom-1 after:left-0 after:right-0 [&.active]:after:bg-primary-foreground"
          >
            Главная
          </Link>
          <Link
            to={"/about"}
            className="relative after:h-0.5 after:transparent after:rounded-md after:absolute after:-bottom-1 after:left-0 after:right-0 [&.active]:after:bg-primary-foreground"
          >
            О нас
          </Link>
        </div>
      </div>
    </header>
  );
};
