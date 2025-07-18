import ContactList from '@entities/contact/ui/ContactList/ContactList';
import ContactForm from '@features/contact-add/ui/ContactForm/ContactForm';

function ContactPage() {
  return (
    <div>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default ContactPage;
