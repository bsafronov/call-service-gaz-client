import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Select } from "./ui/select";
import { Textarea } from "./ui/textarea";

const schema = z.object({
  date: z.string(),
  author: z.string().min(3, { message: "Обязательное поле" }),
  callType: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .nullable(),
  description: z.string().min(3, { message: "Обязательное поле" }),
});

type Schema = z.infer<typeof schema>;

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
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: format(new Date(), "dd.MM.yyyy"),
      callType: null,
      author: "",
      description: "",
    },
  });
  const callType = form.watch("callType");

  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-8">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FieldRender label="Дата">
              <span>{field.value}</span>
            </FieldRender>
          )}
        />
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
