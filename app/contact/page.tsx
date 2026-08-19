import type { Metadata } from "next";
import { getContacts } from "@/lib/contacts";
import { ContactForm } from "./_components/contact-form";

export const metadata: Metadata = {
  title: "お問い合わせ",
};

export default function ContactPage() {
  const contacts = getContacts();

  return (
    <main>
      <h1>お問い合わせ</h1>
      <ContactForm />

      <h2>受け取ったお問い合わせ</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.message}
          </li>
        ))}
      </ul>
    </main>
  );
}
