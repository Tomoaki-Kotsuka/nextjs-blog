"use server";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session";

export async function login(formData: FormData) {
  const name = formData.get("name");

  if (typeof name !== "string" || name.length === 0) {
    return;
  }

  await createSession(name);
  redirect("/login");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
