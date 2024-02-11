import { DataTableColumnHeader } from "@/shared/ui/table/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Call } from "../types";
import { statusLabel, statusStyle, typeLabel } from "./format-columns";
import { cn } from "@/shared/lib/utils";

export const columns: ColumnDef<Call>[] = [
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Дата" />
    ),
    cell: ({ row }) => format(row.original.createdAt, "dd.MM.yyyy"),
    size: 100,
  },
  {
    accessorKey: "author",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Автор" />
    ),
    cell: ({ row }) => row.original.author,
    size: 150,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Описание" />
    ),
    cell: ({ row }) => row.original.description,
    size: 700,
  },
  {
    accessorKey: "callType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Тип" />
    ),
    cell: ({ row }) => (
      <div className="self-center text-center w-full">
        {typeLabel[row.original.callType]}
      </div>
    ),
    enableSorting: true,
    size: 120,
  },
  {
    accessorKey: "callStatus",
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
        <span className="relative self-center block text-center w-full text-primary-foreground">
          {statusLabel[row.original.callStatus]}
        </span>
      </>
    ),
    size: 240,
  },
];
