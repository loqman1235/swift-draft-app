import { z } from "zod";

export const createEmailSchema = z.object({
  username: z.string().trim().min(1, { message: "Name is required" }),
  receiverName: z
    .string()
    .trim()
    .min(1, { message: "Receiver name is required" }),
  description: z.string().trim().min(1, { message: "Description is required" }),
});

export type createEmailSchemaType = z.infer<typeof createEmailSchema>;
