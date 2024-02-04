import { useFetchCalls } from "@/api";
import { columns } from "@/consts/columns";
import { Loader2 } from "lucide-react";
import { DataTable } from "./ui/table/data-table";

// const data: Call[] = [
//   {
//     id: "1",
//     author: "Иванов И.",
//     callType: "error",
//     date: "01.01.2022",
//     description: "Помогите",
//     status: "in queue",
//   },
//   {
//     id: "2",
//     author: "Иванов А.",
//     callType: "recommendation",
//     date: "05.03.2023",
//     description: "Вам стоит улучшить приложение",
//     status: "in progress",
//   },
//   {
//     id: "2",
//     author: "Иванов А.",
//     callType: "error",
//     date: "05.03.2023",
//     description: "У меня не работает!!!",
//     status: "finished",
//   },
// ];

export const CallTable = () => {
  const { data, isSuccess, isLoading, isError } = useFetchCalls();

  return (
    <div className="flex justify-center">
      {isLoading && <Loader2 className="text-primary animate-spin" />}
      {isError && <p>Не удалось получить данные...</p>}
      {isSuccess && <DataTable columns={columns} data={data} />}
    </div>
  );
};
