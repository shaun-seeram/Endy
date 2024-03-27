import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Form from './components/Form';
import AddressBook from './components/AddressBook';
import Header from './components/Header';

const defaultStorageValue = JSON.parse(localStorage.getItem("addresses")) || [{
  name: "Shaun Seeram",
  email: "shaunseeram@hotmail.com",
  address: "123 Something Street",
  id: 0
}];

function App() {

  const [addressBook, setAddressBook] = useState(defaultStorageValue);

  const addContact = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    setAddressBook((prevAddressBook) => {
      const returnValue = [...prevAddressBook, {
        name: formData.get("name").trim(),
        email: formData.get("email").trim(),
        address: formData.get("address").trim(),
        id: new Date().getTime()
      }];

      localStorage.setItem("addresses", JSON.stringify(returnValue));
      return returnValue;
    })
  }

  const removeContact = (id) => {
    if (id === 0) { return };
    setAddressBook((prevAddressBook) => {
      const filteredAddressBook = prevAddressBook.filter(address => address.id !== id);
      localStorage.setItem("addresses", JSON.stringify(filteredAddressBook));
      return filteredAddressBook;
    });
  }

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Form addContact={addContact}/>} />
          <Route path="/address-book" element={<AddressBook addresses={addressBook} removeContact={removeContact} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
