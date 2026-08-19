import "server-only";

export type Contact = {
  id: number;
  name: string;
  message: string;
  createdAt: string;
};

const contacts: Contact[] = [];

export function addContact(name: string, message: string): Contact {
  const contact: Contact = {
    id: contacts.length + 1,
    name,
    message,
    createdAt: new Date().toISOString(),
  };
  contacts.push(contact);
  return contact;
}

export function getContacts(): Contact[] {
  return contacts;
}
