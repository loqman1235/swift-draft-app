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
