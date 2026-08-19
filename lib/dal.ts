import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getContacts } from "@/lib/contacts";

export const verifySession = cache(async () => {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return { userId: session };
});

export async function getMyContacts() {
  const { userId } = await verifySession();

  const items = getContacts()
    .filter((contact) => contact.name === userId)
    .map((contact) => ({
      id: contact.id,
      message: contact.message,
      createdAt: contact.createdAt,
    }));

  return { userId, items };
}
