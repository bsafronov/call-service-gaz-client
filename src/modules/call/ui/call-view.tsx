import { format } from "date-fns";
import { Loader2 } from "lucide-react";
import { useFetchCall } from "../domain/api";
import { Call } from "../domain/types";
import { typeLabel } from "../domain/consts/format-columns";

type Props = {
  callId: Call["id"];
};

export const CallView = ({ callId }: Props) => {
  const { data: call, isSuccess, isLoading } = useFetchCall(callId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Loader2 className="text-primary animate-spin" />
      </div>
    );
  }

  if (!isSuccess) {
    return <p>Не удалось получить данные...</p>;
  }

  return (
    <div className="space-y-3 text-sm">
      <div className="grid grid-cols-6">
        <span role="label" className="col-span-2 font-semibold">
          Дата
        </span>
        <span className="col-span-4">
          {format(new Date(call.createdAt), "dd.MM.yyyy")}
        </span>
      </div>
      <div className="grid grid-cols-6 ">
        <span role="label" className="col-span-2 font-semibold">
          Автор
        </span>
        <span>{call.author}</span>
      </div>
      <div className="grid grid-cols-6 ">
        <span role="label" className="col-span-2 font-semibold">
          Тип обращения
        </span>
        <span>{typeLabel[call.callType]}</span>
      </div>
      <div className="flex flex-col">
        <span role="label" className="col-span-2 font-semibold">
          Описание
        </span>
        <p className="border p-2 rounded-md min-h-40">{call.description}</p>
      </div>
    </div>
  );
};
