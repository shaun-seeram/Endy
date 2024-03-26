import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Form from './components/Form';
import AddressBook from './components/AddressBook';

function App() {

  const [addressBook, setAddressBook] = useState([]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    setAddressBook((prevAddressBook) => {
      return [...prevAddressBook, {
        name: formData.get("name"),
        email: formData.get("email"),
        id: new Date().getTime()
      }]
    })
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form onSubmit={formSubmitHandler}/>} />
        <Route path="/address-book" element={<AddressBook addresses={addressBook} />} />
      </Routes>
    </div>
  );
}

export default App;
