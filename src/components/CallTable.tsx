import { useFetchCalls } from "@/api";
import { columns } from "@/consts";
import { Loader2 } from "lucide-react";
import { DataTable } from "./ui/table/data-table";

export const CallTable = () => {
  const { data, isSuccess, isLoading, isError } = useFetchCalls();

  if (isLoading || isError) {
    return (
      <div className="flex justify-center">
        {isLoading && <Loader2 className="text-primary animate-spin" />}
        {isError && <p>Не удалось получить данные...</p>}
      </div>
    );
  }
  return <>{isSuccess && <DataTable columns={columns} data={data} />}</>;
};
