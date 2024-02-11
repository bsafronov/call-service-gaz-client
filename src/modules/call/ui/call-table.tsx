import { Loader2 } from "lucide-react";
import { useCallback, useMemo } from "react";
import { DataTable } from "../../../shared/ui/table/data-table";
import { useFetchCalls } from "../domain/api";
import { columns } from "../domain/consts/columns";
import { useExistedCallModal } from "../domain/hooks/use-existed-call-modal";

export const CallTable = () => {
  const setCall = useExistedCallModal().setCall;
  const {
    data,
    isSuccess,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useFetchCalls();

  const flatData = useMemo(
    () => data?.pages.flatMap((page) => page.calls) ?? [],
    [data]
  );

  const fetchMoreOnBottomReach = useCallback(() => {
    if (isFetching || !hasNextPage) return;

    fetchNextPage();
  }, [fetchNextPage, isFetching, hasNextPage]);

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
        <>
          <DataTable
            columns={columns}
            data={flatData}
            onClick={(row) => setCall(row.id)}
            onBottomReach={fetchMoreOnBottomReach}
          />
        </>
      )}
    </>
  );
};
