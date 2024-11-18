import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Link, useParams } from 'react-router-dom';
import { deleteContact } from '../../store/slices/contactsSlice';
import './ContactInfoModal.css';


const ContactInfo: React.FC = () => {
  const { id } = useParams();
  const contact = useAppSelector((state) => state.contacts.contacts.find((c) => c.id === id));
  const dispatch = useAppDispatch();

  if (!contact) {
    return <p className="text-center">Contact not found!</p>;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Link className="close-button" to="/">×</Link>
        <div className="">
          <div className="d-flex justify-content-start align-items-center mb-3">
            <img src={contact.photo} alt="avatar" style={{ width: '100px', height: '100px' }} />
            <div className="ms-5">
              <h3>{contact.name}</h3>
              <p>Phone: {contact.phone}</p>
              <p>Email: {contact.email}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <Link to={`/edit-contact/${contact.id}`} className="btn btn-outline-warning">Edit</Link>
            <button onClick={() => dispatch(deleteContact(contact.id))} className="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
