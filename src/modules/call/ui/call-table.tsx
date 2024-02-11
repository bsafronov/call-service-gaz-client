import { Loader2 } from "lucide-react";
import { DataTable } from "../../../shared/ui/table/data-table";
import { useFetchCalls } from "../domain/api";
import { columns } from "../domain/consts/columns";
import { useExistedCallModal } from "../domain/hooks/use-existed-call-modal";

export const CallTable = () => {
  const { data, isSuccess, isLoading, isError } = useFetchCalls();
  const setCall = useExistedCallModal().setCall;

  if (isLoading || isError) {
    return (
      <div className="flex justify-center">
        {isLoading && <Loader2 className="text-primary animate-spin" />}
        {isError && <p>Не удалось получить данные...</p>}
      </div>
    );
  }
  return (
    <>
      {isSuccess && (
        <DataTable
          columns={columns}
          data={data}
          onClick={(row) => setCall(row.id)}
        />
      )}
    </>
  );
};
