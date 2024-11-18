import * as React from 'react';
import ContactItem from '../../components/ContactItem/ContactItem.tsx';
import { useAppSelector } from '../../app/hooks.ts';

const ContactList = () => {
  const contacts = useAppSelector((state) => state.contacts.contacts);

  return (
    <div className="container mt-4">
      <h2>Contacts</h2>
      <div className="d-flex flex-column gap-3">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <div key={contact.id}>
              <ContactItem contact={contact} />
            </div>
          ))
        ) : (
          <p>No contacts found!</p>
        )}
      </div>
    </div>
  );
};

export default ContactList;