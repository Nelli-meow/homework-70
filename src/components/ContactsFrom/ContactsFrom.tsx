import * as React from 'react';

const ContactsFrom = () => {
  return (
    <div className="container mt-5">
      <h3>Add new contact</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Name</label>
          <input type="Name" className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
          <input type="Phone" className="form-control"/>
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputPhoto1" className="form-label">Photo</label>
          <input className="form-control"/>
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputPhoto1" className="form-label">Photo preview</label>
          <image/>
        </div>
        <div className="d-flex justify-content-sm-between align-items-center">
          <button type="button" className="btn btn-outline-info">Save</button>
          <button type="button" className="btn btn-outline-primary">Back to contacts</button>
        </div>
      </form>
    </div>
  );
};

export default ContactsFrom;