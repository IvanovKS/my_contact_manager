import { create } from 'zustand';
import { ContactStore } from './types';

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
