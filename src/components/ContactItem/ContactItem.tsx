import * as React from 'react';
import { Link } from 'react-router-dom';
import { IContact } from '../../types';


const ContactItem: React.FC<{ contact: IContact }> = ({ contact }) => {
  return (
    <Link
      to={`/contacts/${contact.id}`}
      className="text-decoration-none"

    >
      <div
        className="container border border-2 rounded p-3 d-flex align-items-center justify-content-start"
        style={{ cursor: "pointer" }}
      >
        <img
          className="me-5"
          src={contact.photo}
          alt="avatar"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <h3 className="text-dark m-0">{contact.name}</h3>
      </div>
    </Link>
  );
};

export default ContactItem;