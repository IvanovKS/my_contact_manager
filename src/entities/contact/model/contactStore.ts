import { create } from 'zustand';

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

export const useContactStore = create<ContactStore>((set) => ({
  contacts: [],

  addContact: (contact) =>
    set((state) => ({
      contacts: [...state.contacts, contact],
    })),

  removeContact: (id) =>
    set((state) => ({
      contacts: state.contacts.filter((c) => c.id !== id),
    })),

  updateContact: (updated) =>
    set((state) => ({
      contacts: state.contacts.map((c) => (c.id === updated.id ? updated : c)),
    })),
}));
