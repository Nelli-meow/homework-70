import './App.css'
import Header from './components/Header/Header.tsx';
import ContactsFrom from './components/ContactsFrom/ContactsFrom.tsx';
import { Route, Routes } from 'react-router-dom';
import ContactList from './containers/ContactList/ContactList.tsx';
import ContactInfo from './containers/ContactInfo/ContactInfo.tsx';

const App = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/new-contact" element={<ContactsFrom />} />
        <Route path="/edit-contact/:id" element={<ContactsFrom />} />
        <Route path="/contacts/:id" element={<ContactInfo/>} />
        <Route path="*" element={<p className="text-center m-5 ">Page is not found</p>}/>
      </Routes>
    </>
  )
};

export default App
