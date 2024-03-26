import { useState } from 'react';
import './App.css';
import Form from './components/Form';

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
      <Form onSubmit={formSubmitHandler}/>
    </div>
  );
}

export default App;
