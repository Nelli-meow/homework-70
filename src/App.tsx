import './App.css'
import Header from './components/Header/Header.tsx';
import ContactsFrom from './components/ContactsFrom/ContactsFrom.tsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/new-contact" element={<ContactsFrom/>}/>
      </Routes>
    </>
  )
};

export default App
