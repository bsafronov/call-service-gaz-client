import { createLazyFileRoute } from "@tanstack/react-router";
import { EyeOff } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-secondary-foreground">
          Просто пример навигации в приложении
        </h1>
        <h3 className="text-2xl font-semibold text-secondary-foreground">
          Здесь ничего нет
        </h3>
        <EyeOff className="w-24 h-24" />
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute("/about")({
  component: AboutPage,
});
