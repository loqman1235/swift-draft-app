"use client";
import CustomFormField from "@/components/CustomFormField";
import CustomFormSelect from "@/components/CustomFormSelect";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { sanitizeContent } from "@/lib/utils";
import { createEmailSchema, createEmailSchemaType } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type CreateEmailFormProps = {
  onEmailGenerated: (email: string) => void;
};

const CreateEmailForm = ({ onEmailGenerated }: CreateEmailFormProps) => {
  const { data: session } = useSession();

  console.log(session);
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
    const prompt = `
      Write an email to ${values.receiverName} in ${values.lang} language.
      The tone should be ${values.tone}.
      The mood should be ${values.mood}.
      The length should be ${values.length}.
      The email should be written by ${values.username}.
      ${values.description}.
      Use these sections and no extra information outside the email format.
    `;

    try {
      const response = await fetch("/api/generate-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      if (response.ok) {
        const sanitizedOutput = sanitizeContent(data.output);
        onEmailGenerated(sanitizedOutput);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (session?.user.name) {
      form.setValue("username", session.user.name);
    }
  }, [session, form]);

  return (
    <div>
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

          <Button
            disabled={form.formState.isSubmitting}
            className="w-fit"
            size="lg"
            type="submit"
          >
            {form.formState.isSubmitting ? (
              <span className="flex items-center gap-2">
                <LoaderCircle className="size-4 animate-spin" /> Generating...
              </span>
            ) : (
              "Generate Email"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateEmailForm;
