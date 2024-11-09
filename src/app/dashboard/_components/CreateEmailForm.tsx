"use client";
import CustomFormField from "@/components/CustomFormField";
import CustomFormSelect from "@/components/CustomFormSelect";
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
      lang: "english",
      tone: "formal",
      mood: "neutral",
      length: "medium",
    },
  });

  const onSubmit = async (values: createEmailSchemaType) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col items-center gap-5 md:flex-row">
          <CustomFormField
            form={form}
            label="Your Name"
            name="username"
            placeholder="e.g., John Doe"
            className="py-5"
            description="Enter the name you want to appear in your email's signature."
          />
          <CustomFormField
            form={form}
            label="Receiver Name"
            name="receiverName"
            placeholder="e.g., Jane Smith"
            className="py-5"
            description="Specify the name of the person or organization you a writing to."
          />
        </div>

        <CustomFormField
          form={form}
          label="Description"
          name="description"
          placeholder="Provide key points"
          isTextArea
          className="min-h-[120px] resize-none"
          description="Briefly describe the purpose of your email"
        />

        <div className="flex w-full flex-wrap gap-5 md:flex-nowrap">
          <CustomFormSelect
            form={form}
            label="Language"
            name="lang"
            placeholder="Select Language"
            className="py-5"
            options={[
              { label: "English", value: "english" },
              { label: "Arabic", value: "arabic" },
              { label: "French", value: "french" },
            ]}
          />
          <CustomFormSelect
            form={form}
            label="Tone"
            name="tone"
            placeholder="Select Tone"
            className="py-5"
            options={[
              { label: "Formal", value: "formal" },
              { label: "Informal", value: "informal" },
            ]}
          />

          <CustomFormSelect
            form={form}
            label="Mood"
            name="mood"
            placeholder="Select Mood"
            className="py-5"
            options={[
              { label: "Positive", value: "positive" },
              { label: "Negative", value: "negative" },
              { label: "Neutral", value: "neutral" },
            ]}
          />

          <CustomFormSelect
            form={form}
            label="Length"
            name="length"
            placeholder="Select Length"
            className="py-5"
            options={[
              { label: "Short", value: "short" },
              { label: "Medium", value: "medium" },
              { label: "Long", value: "long" },
            ]}
          />
        </div>

        <Button className="w-fit" size="lg" type="submit">
          Write Email
        </Button>
      </form>
    </Form>
  );
};

export default CreateEmailForm;
