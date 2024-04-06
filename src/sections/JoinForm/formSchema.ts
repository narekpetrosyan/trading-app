import z from "zod"

export const formSchema = z.object({
  first_name: z.string().min(3, "Enter a valid name"),
  last_name: z.string().min(3, "Enter a valid last name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string({ required_error: "Phone is required" }),
  agree_with_terms: z.boolean({ required_error: "Agree with terms" }).refine(val => {
    return !!val
  }, "Agree with terms"),
})

export type TSchema = z.infer<typeof formSchema>
