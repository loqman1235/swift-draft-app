import { z } from "zod";

export const createEmailSchema = z.object({
  username: z.string().trim().min(1, { message: "Name is required" }),
  receiverName: z
    .string()
    .trim()
    .min(1, { message: "Receiver name is required" }),
  description: z.string().trim().min(1, { message: "Description is required" }),
  lang: z.enum(["english", "arabic", "french"]).default("english"),
  tone: z.enum(["formal", "informal"]).default("formal"),
  mood: z.enum(["positive", "negative", "neutral"]).default("neutral"),
  length: z.enum(["short", "medium", "long"]).default("medium"),
});

export type createEmailSchemaType = z.infer<typeof createEmailSchema>;

export const replyToEmailSchema = z.object({
  username: z.string().trim().min(1, { message: "Name is required" }),
  senderName: z.string().trim().min(1, { message: "Sender name is required" }),
  receivedEmail: z
    .string()
    .trim()
    .min(1, { message: "Received email is required" }),
  description: z.string().trim().min(1, { message: "Description is required" }),
  lang: z.enum(["english", "arabic", "french"]).default("english"),
  tone: z.enum(["formal", "informal"]).default("formal"),
  mood: z.enum(["positive", "negative", "neutral"]).default("neutral"),
  length: z.enum(["short", "medium", "long"]).default("medium"),
});

export type replyToEmailSchemaType = z.infer<typeof replyToEmailSchema>;

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" }),
});

export const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});
