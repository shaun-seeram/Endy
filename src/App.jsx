import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import Form from './components/Form';
import AddressBook from './components/AddressBook';
import Header from './components/Header';
import CartContextProvider from './store/AddressBookContext';
import FormContextProvider from "./store/FormContext";

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <FormContextProvider>
        <div className="App">
          <Header />
          <div className='content'>
            <Routes>
              <Route path="/" element={<Form />} />
              <Route path="/address-book" element={<AddressBook />} />
            </Routes>
          </div>
        </div>
        </FormContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
