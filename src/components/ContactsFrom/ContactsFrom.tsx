import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { IContact } from '../../types';
import { Link } from 'react-router-dom';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  photo: '',
};


const ContactsFrom = () => {
  const [contact, setContact] = useState<IContact>({...initialForm});

  const onChangeField = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);


  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (contact.name.length === 0 || contact.email.length === 0 || contact.phone.length === 0 || contact.photo.length === 0) {
      alert('Don\'t leave fields blank');
    } else {
      setContact({...initialForm});
      console.log(contact);
    }
  };

  return (
    <div className="container mt-5">
      <h3>Add new contact</h3>
      <form onSubmit={onSubmitForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Name</label>
          <input onChange={onChangeField} value={contact.name}  name="name" className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
          <input name="phone" onChange={onChangeField} value={contact.phone}  className="form-control"/>
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input name="email" onChange={onChangeField} value={contact.email}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputPhoto1" className="form-label">Photo</label>
          <input name="photo" onChange={onChangeField} value={contact.photo} className="form-control"/>
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputPhoto1" className="form-label">Photo preview</label>
          <image src={contact.photo} />
        </div>
        <div className="d-flex justify-content-sm-between align-items-center">
          <button type="submit" className="btn btn-outline-info">Save</button>
          <Link to="/" className="btn btn-outline-primary">Back to contacts</Link>
        </div>
      </form>
    </div>
  );
};

export default ContactsFrom;