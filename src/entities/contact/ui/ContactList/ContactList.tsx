import { Contact } from '@entities/contact/model/types';
import { useContactStore } from '@entities/contact/model/contactStore';
import { useNavigate } from 'react-router-dom';

export interface ContactListProps {
  filter?: string;
}

const ContactList: React.FC<ContactListProps> = () => {
  const navigate = useNavigate();
  const contacts = useContactStore((state) => state.contacts);

  const handleContactClick = (id: number) => {
    navigate(`/contacts/${id}`);
  };

  if (contacts.length === 0) {
    return <div>ContactList is empty</div>;
  }

  return (
    <ul>
      {contacts.map((contact: Contact) => {
        return (
          <li key={contact.id} onClick={() => handleContactClick(contact.id)}>
            {contact.name}
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
