import * as z from "zod";

export const passwordSchema = z
  .string()
  .min(8, "Password too short")
  .max(64, "Password too long")
  .regex(/[A-Z]/, "Must include uppercase letter")
  .regex(/[a-z]/, "Must include lowercase letter")
  .regex(/[0-9]/, "Must include number")
  .regex(/[^A-Za-z0-9]/, "Must include special character");

const calculateAge = (dob: Date) => {
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < dob.getDate())
  ) {
    age--;
  }

  return age;
};

const registerSchema = z
  .object({
    fullname: z
      .string()
      .trim()
      .min(2, "Full name too short")
      .max(50, "Full name too long"),

    username: z
      .string()
      .trim()
      .min(3)
      .max(20)
      .regex(/^[a-zA-Z0-9_]+$/, "Invalid username")
      .transform((v) => v.toLowerCase())
      .refine(
        (v) => !["admin", "support", "root"].includes(v),
        "Username not allowed"
      ),

    email: z
      .string()
      .email("Invalid email")
      .transform((v) => v.toLowerCase())
      .optional(),

    phoneNumber: z
      .string()
      .regex(/^\+?[1-9]\d{7,14}$/, "Invalid phone number")
      .optional(),

    password: passwordSchema,

    dateOfBirth: z
      .coerce
      .date()
      .refine((dob) => calculateAge(dob) >= 13, {
        message: "User must be at least 13 years old",
      }),

    profilePicture: z.string().url().optional().nullable(),

    gender: z
      .number()
      .int()
      .refine((v) => [0, 1, 2].includes(v), "Invalid gender")
      .default(2),
  })

  .refine((data) => data.email || data.phoneNumber, {
    path: ["email"],
    message: "Either email or phone number is required",
  })

  .strict();

export default registerSchema;