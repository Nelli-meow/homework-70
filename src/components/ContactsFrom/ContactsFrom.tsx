import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { IContact } from '../../types';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks.ts';
import { addContact, editContact } from '../../store/slices/contactsSlice.ts';
import axiosApi from '../../axiosAPI.ts';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  photo: '',
  id: '',
};

const ContactsForm = () => {
  const [contact, setContact] = useState<IContact>({ ...initialForm });
  const dispatch = useAppDispatch();
  const { id } = useParams();


  const fetchContact = async () => {
    if (id) {
      try {
        const response = await axiosApi.get(`contacts/${id}.json`);
        if (response.data) {
          setContact({
            ...response.data,
            id,
          });

        }
      } catch (error) {
        console.error(error);
      }
    }
  };


  useEffect(() => {
    if (id) {
      void fetchContact();
    }
  }, [id]);

  const onChangeField = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (contact.name.length === 0 || contact.email.length === 0 || contact.phone.length === 0 || contact.photo.length === 0) {
      alert('Don\'t leave fields blank');
    } else {
      if (id) {

        try {
          await axiosApi.put(`contacts/${id}.json`, { ...contact });
          dispatch(editContact({ ...contact, id }));
        } catch (error) {
          console.error(error);
        }
      } else {

        try {
          const newContact = { ...contact, id: new Date().toString() };
          await axiosApi.post('contacts.json', newContact);
          dispatch(addContact(newContact));

        } catch (error) {
          console.error( error);
        }

      }
      setContact({ ...initialForm });
    }
  };

  return (
    <div className="container mt-5">
      <h2>{id ? 'Edit Contact' : 'Add New Contact'}</h2>
      <form onSubmit={onSubmitForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Name</label>
          <input
            onChange={onChangeField}
            value={contact.name}
            name="name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
          <input
            name="phone"
            onChange={onChangeField}
            value={contact.phone}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input
            name="email"
            onChange={onChangeField}
            value={contact.email}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhoto1" className="form-label">Photo</label>
          <input
            name="photo"
            onChange={onChangeField}
            value={contact.photo}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhoto1" className="form-label">Photo preview</label>
          {contact.photo && <img src={contact.photo} alt="Preview" style={{ width: '100px', height: '100px' }} />}
        </div>
        <div className="d-flex justify-content-sm-between align-items-center">
          <button type="submit" className="btn btn-outline-info">Save</button>
          <Link to="/" className="btn btn-outline-primary">Back to contacts</Link>
        </div>
      </form>
    </div>
  );
};

export default ContactsForm;
