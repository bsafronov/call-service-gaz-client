import { CallExistedModal, CallNewModal } from "@/modules/call";
import { Toaster } from "@/shared/ui/sonner";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <Providers>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="grow">
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
    <header className="h-16 bg-primary flex items-center justify-center">
      <div className="container flex justify-between items-center text-primary-foreground">
        <Link to={"/"} className="text-4xl font-bold">
          Logo
        </Link>
        <div className="flex gap-4 font-semibold">
          <Link to={"/"} className="[&.active]:text-secondary">
            Главная
          </Link>
          <Link to={"/about"} className="[&.active]:text-secondary">
            О нас
          </Link>
        </div>
      </div>
    </header>
  );
};
