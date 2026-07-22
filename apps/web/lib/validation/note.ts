import {z} from "zod";

export const noteSchema = z.object({
  title: z.string().trim().min(1).max(100),
  description: z.string().trim().optional(),
  type: z.enum(["TEXT", "VOICE", "IMAGE", "PDF", "LINK"]),
  textContent: z.string().optional(),
  resourceUrl: z.string().url().optional(),
});