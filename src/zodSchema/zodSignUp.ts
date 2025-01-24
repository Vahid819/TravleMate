import {z} from "zod" 

export const usernameValidation = z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .regex(/^[a-zA-Z0-9_]*$/, "Username must only contain letters, numbers, and underscores")


export const signUpSchema = z.object({
    firstname: z.string().min(2, "First name must be at least 2 characters"),
    lastname: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    username: usernameValidation,
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
})