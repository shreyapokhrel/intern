import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  gender: z.enum(["Male", "Female", "Other"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
  contact: z
    .string()
    .min(7, "Contact must be at least 7 digits")
    .regex(/^\d+$/, "Contact must be a valid number"),
  email: z.string().email("Invalid email format"),
  permanentAddress: z.string().optional(),
  temporaryAddress: z.string().optional(),
  grade: z.string().optional(),
});
