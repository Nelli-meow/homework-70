import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-primary-subtle">
      <header className="container py-4 d-flex align-items-center justify-content-sm-between">
        <Link to="/" className="nav-link fs-2">Contacts</Link>
        <button className="btn btn-primary">Add new contact</button>
      </header>
    </div>
  );
};

export default Header;