import { passwordSchema } from "./registerSchema";
import * as z from "zod";

const emailSchema = z.string().email();

const phoneSchema = z
  .string()
  .regex(/^[6-9]\d{9}$/, "Invalid phone number"); // Indian format

const usernameSchema = z
  .string()
  .min(3)
  .max(20)
  .regex(/^[a-zA-Z0-9_]+$/, "Invalid username");

const loginSchema = z.object({
  identifier: z
    .string()
    .trim()
    .toLowerCase()
    .refine((value) => {
      return (
        emailSchema.safeParse(value).success ||
        phoneSchema.safeParse(value).success ||
        usernameSchema.safeParse(value).success
      );
    }, "Enter valid email, phone number, or username"),

  password: passwordSchema,
});

export default loginSchema;