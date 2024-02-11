import { DataTableColumnHeader } from "@/shared/ui/table/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import { Call } from "../types";
import { format } from "date-fns";
import { statusLabel, statusStyle, typeLabel } from "./format-columns";
import { cn } from "@/shared/lib/utils";

export const columns: ColumnDef<Call>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Дата" />
    ),
    cell: ({ row }) => format(row.original.createdAt, "dd.MM.yyyy"),
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
    cell: ({ row }) => (
      <div className="text-center">{typeLabel[row.original.callType]}</div>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Статус" />
    ),

    cell: ({ row }) => (
      <>
        <div
          className={cn(
            "absolute inset-0",
            statusStyle[row.original.callStatus]
          )}
        />
        <span className="relative block text-center text-primary-foreground">
          {statusLabel[row.original.callStatus]}
        </span>
      </>
    ),
  },
];
