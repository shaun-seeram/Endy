import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Form from './components/Form';
import AddressBook from './components/AddressBook';
import Header from './components/Header';

function App() {

  const [addressBook, setAddressBook] = useState([]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    setAddressBook((prevAddressBook) => {
      return [...prevAddressBook, {
        name: formData.get("name").trim(),
        email: formData.get("email").trim(),
        id: new Date().getTime()
      }]
    })
  }

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Form onSubmit={formSubmitHandler}/>} />
          <Route path="/address-book" element={<AddressBook addresses={addressBook} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
