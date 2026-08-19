"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { addContact } from "@/lib/contacts";

const ContactSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  message: z.string().min(10, "メッセージは 10 文字以上で入力してください"),
});

export type ContactState = {
  errors?: { name?: string[]; message?: string[] };
  success?: boolean;
};

export async function submitContact(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const parsed = ContactSchema.safeParse({
    name: formData.get("name"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return { errors: z.flattenError(parsed.error).fieldErrors };
  }

  addContact(parsed.data.name, parsed.data.message);
  revalidatePath("/contact");

  redirect("/contact/thanks");
}
