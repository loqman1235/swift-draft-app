"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createEmailSchema, createEmailSchemaType } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const CreateEmailForm = () => {
  const form = useForm<createEmailSchemaType>({
    resolver: zodResolver(createEmailSchema),
    defaultValues: {
      username: "",
      receiverName: "",
      description: "",
    },
  });

  const onSubmit = async (values: createEmailSchemaType) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name</FormLabel>
              <FormControl>
                <Input
                  className="bg-foreground"
                  placeholder="Enter your name here"
                  {...field}
                />
              </FormControl>
              <FormDescription>Enter your name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Write Email</Button>
      </form>
    </Form>
  );
};

export default CreateEmailForm;
