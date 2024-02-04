import { DataTableColumnHeader } from "@/components/ui/table/dataTableColumnHeader";
import { cn } from "@/lib/utils";
import { Call, CallStatus, CallType } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

const statusLabel: Record<CallStatus, string> = {
  "in queue": "В очереди",
  "in progress": "В работе",
  finished: "Готово",
};

const typeLabel: Record<CallType, string> = {
  error: "Ошибка",
  recommendation: "Рекомендация",
  remark: "Замечание",
};

const statusStyle: Record<CallStatus, string> = {
  "in queue": "bg-slate-200",
  "in progress": "bg-amber-300",
  finished: "bg-emerald-300",
};

export const columns: ColumnDef<Call>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Дата" />
    ),
    cell: ({ row }) => row.original.date,
  },
  {
    accessorKey: "author",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Автор" />
    ),
    cell: ({ row }) => row.original.author,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Описание" />
    ),
    cell: ({ row }) => row.original.description,
  },
  {
    accessorKey: "callType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Тип" />
    ),
    cell: ({ row }) => typeLabel[row.original.callType],
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Статус" />
    ),
    cell: ({ row }) => (
      <span
        className={cn(
          "font-semibold px-2 rounded-md py-1",
          statusStyle[row.original.status]
        )}
      >
        {statusLabel[row.original.status]}
      </span>
    ),
  },
];
