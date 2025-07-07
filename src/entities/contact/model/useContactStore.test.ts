import { useContactStore } from './contactStore';

const exampleContact = {
  id: 1,
  name: 'Иван',
  phone: '+79991234567',
  email: 'ivan@example.com',
};

afterEach(() => {
  useContactStore.setState({ contacts: [] });
});

describe('useContactStore', () => {
  test('добавить новый контакт', () => {
    useContactStore.getState().addContact(exampleContact);

    const contacts = useContactStore.getState().contacts;
    expect(contacts).toHaveLength(1);
    expect(contacts[0]).toEqual(exampleContact);
  });

  test('удалить контакт по id', () => {
    useContactStore.getState().addContact(exampleContact);
    useContactStore.getState().removeContact(1);

    const contacts = useContactStore.getState().contacts;
    expect(contacts).toHaveLength(0);
  });

  test('обновить контакт по id', () => {
    useContactStore.getState().addContact(exampleContact);

    const updatedContact = {
      ...exampleContact,
      name: 'Пётр',
    };

    useContactStore.getState().updateContact(updatedContact);

    const contacts = useContactStore.getState().contacts;
    expect(contacts[0].name).toBe('Пётр');
  });
});
