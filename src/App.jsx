import { Route, Routes, BrowserRouter } from "react-router-dom"
import Form from './components/Form';
import AddressBook from './components/AddressBook';
import Header from './components/Header';
import AddressBookContextProvider from './store/AddressBookContext';
import FormContextProvider from "./store/FormContext";

function App() {

  // Browser router to navigate between the two pages
  // Providers for Main page (Form) and Address Book to keep as much logic in its own file

  return (
    <BrowserRouter>
      <AddressBookContextProvider>
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
      </AddressBookContextProvider>
    </BrowserRouter>
  );
}

export default App;
