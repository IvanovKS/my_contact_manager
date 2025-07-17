export interface Contact {
  id: number;
  name: string;
  phone: string;
  email?: string;
}

export interface ContactStore {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  removeContact: (id: number) => void;
  updateContact: (updated: Contact) => void;
}
