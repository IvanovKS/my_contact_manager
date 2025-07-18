import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ContactStore } from './types';

export const useContactStore = create<ContactStore>()(
  persist(
    (set) => ({
      contacts: [],
      addContact: (contact) =>
        set((state) => ({
          contacts: [...state.contacts, contact],
        })),
      updateContact: (updated) =>
        set((state) => ({
          contacts: state.contacts.map((c) => (c.id === updated.id ? updated : c)),
        })),
      removeContact: (id) =>
        set((state) => ({
          contacts: state.contacts.filter((c) => c.id !== id),
        })),
    }),
    {
      name: 'contact-storage',
    },
  ),
);
