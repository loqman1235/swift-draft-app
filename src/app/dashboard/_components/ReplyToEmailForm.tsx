"use client";
import CustomFormField from "@/components/CustomFormField";
import CustomFormSelect from "@/components/CustomFormSelect";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { sanitizeContent } from "@/lib/utils";
import { replyToEmailSchema, replyToEmailSchemaType } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEmailContext } from "../_context/EmailProvider";
import { LoaderCircle } from "lucide-react";

type ReplyToEmailFormProps = {
  onEmailGenerated: (email: string) => void;
};

const ReplyToEmailForm = ({ onEmailGenerated }: ReplyToEmailFormProps) => {
  const { data: session } = useSession();
  const { setEmailUsage } = useEmailContext();

  const form = useForm<replyToEmailSchemaType>({
    resolver: zodResolver(replyToEmailSchema),
    defaultValues: {
      username: "",
      senderName: "",
      receivedEmail: "",
      description: "",
      lang: "english",
      tone: "formal",
      mood: "neutral",
      length: "medium",
    },
  });

  const onSubmit = async (values: replyToEmailSchemaType) => {
    const prompt = `
    Reply to the following email in ${values.lang} language:
    ${values.receivedEmail}

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
        setEmailUsage((prev) => (prev === null ? null : prev - 1));
        const sanitizedOutput = sanitizeContent(data.output);
        onEmailGenerated(sanitizedOutput);
        form.reset();
      }

      if (response.status === 402) {
        if (data.error) {
          toast(data.error, { className: "!bg-destructive !text-white" });
          return;
        }
      }
    } catch (error) {
      console.error("Error generating email:", error);
    }
  };

  useEffect(() => {
    if (session?.user.name) {
      form.setValue("username", session.user.name);
    }
  }, [session, form]);

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
            name="senderName"
            placeholder="e.g., Jane Smith"
            className="py-5"
            description="Specify the name of the person or organization you are replying to."
          />
        </div>
        <CustomFormField
          form={form}
          label="Received Email"
          name="receivedEmail"
          placeholder="Paste the received email text here"
          isTextArea
          className="min-h-[120px] resize-none"
          description="Paste the email/conversation text that you need to respond to."
        />

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
              <LoaderCircle className="size-4 animate-spin" /> Generating
              Reply...
            </span>
          ) : (
            "Write Reply"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ReplyToEmailForm;
