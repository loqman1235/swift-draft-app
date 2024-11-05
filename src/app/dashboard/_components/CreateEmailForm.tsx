"use client";
import CustomFormField from "@/components/CustomFormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

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
        <CustomFormField
          form={form}
          label="Your Name"
          name="username"
          placeholder="Enter your name here"
        />

        <CustomFormField
          form={form}
          label="Reveiver Name"
          name="receiverName"
          placeholder="Enter receiver name here"
        />

        <Button type="submit">Write Email</Button>
      </form>
    </Form>
  );
};

export default CreateEmailForm;
