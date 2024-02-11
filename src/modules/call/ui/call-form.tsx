import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../shared/ui/form";
import { Input } from "../../../shared/ui/input";
import { Select } from "../../../shared/ui/custom-select";
import { Textarea } from "../../../shared/ui/textarea";
import { useCreateCall } from "../domain/api";
import { useNewCallModal } from "../domain/hooks/use-new-call-modal";
import { CallType } from "../domain/types";

const schema = z.object({
  author: z.string().min(3, { message: "Обязательное поле" }),
  callType: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .nullish(),
  description: z.string().min(3, { message: "Обязательное поле" }),
});

export type Schema = z.infer<typeof schema>;

const callTypes = [
  {
    label: "Ошибка",
    value: "error",
  },
  {
    label: "Рекомендация",
    value: "recommendation",
  },
  {
    label: "Замечание",
    value: "remark",
  },
];

export const CallForm = () => {
  const { mutateAsync: createCall } = useCreateCall();
  const toggleModal = useNewCallModal().toggle;
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      callType: null,
      author: "",
      description: "",
    },
  });
  const callType = form.watch("callType") ?? null;
  const currentDate = format(new Date(), "dd.MM.yyyy");

  const onSubmit = (data: Schema) => {
    const { author, callType, description } = data;
    const _callType = callType?.value as CallType;
    try {
      createCall({
        author,
        callType: _callType,
        description,
      });
      toggleModal();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 pt-8">
        <div className="grid grid-cols-6">
          <span
            role="label"
            className="flex items-center col-span-2 font-semibold text-sm"
          >
            Дата
          </span>
          <span className="col-span-4 text-sm">{currentDate}</span>
        </div>
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FieldRender label="Автор">
              <Input placeholder="Введите имя" {...field} />
            </FieldRender>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={() => (
            <FieldRender label="Тип обращения">
              <Select
                onChange={(v) => form.setValue("callType", v)}
                value={callType}
                options={callTypes}
                renderOption={"label"}
                renderSelected={"label"}
                placeholder="Выберите тип"
              />
            </FieldRender>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea placeholder="Добавьте описание" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center mt-10">
          <Button>Отправить</Button>
        </div>
      </form>
    </Form>
  );
};

type FieldRenderProps = {
  label: string;
  children?: React.ReactNode;
};
const FieldRender = ({ label, children }: FieldRenderProps) => {
  return (
    <FormItem className="grid grid-cols-6">
      <FormLabel className="flex items-center col-span-2">{label}</FormLabel>
      <FormControl className="col-span-4">{children}</FormControl>
      <FormMessage className="col-span-3 col-start-3" />
    </FormItem>
  );
};
