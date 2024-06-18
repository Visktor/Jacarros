import { z } from "zod";

export default function objectValidation<
  O extends { [key: string]: unknown },
  S extends { [K in keyof O]: z.ZodTypeAny }
>(
  obj: O,
  zodSchema: S
):
  | { success: false; error: z.ZodError }
  | { success: true; data: z.infer<z.ZodObject<S>> } {
  return z.object(zodSchema).safeParse(obj);
}
