import { createContext, useState } from "react";

// Sets default value for address list
const defaultStorageValue = JSON.parse(localStorage.getItem("addresses")) || [{
    name: "Shaun Seeram",
    email: "shaunseeram@hotmail.com",
    address: "123 Something Street",
    id: 0
}];

export const AddressBookContext = createContext({
    addressBook: [],
    addToAddressBook: () => {},
    removeFromAddressBook: () => {}
});

// Managing address book states
export default function AddressBookContextProvider({ children }) {

    const [addressBook, setAddressBook] = useState(defaultStorageValue);

    const addToAddressBook = (e) => {
        e.preventDefault()
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

    const removeFromAddressBook = (id) => {
        if (id === 0) { return };
        setAddressBook((prevAddressBook) => {
            const filteredAddressBook = prevAddressBook.filter(address => address.id !== id);
            localStorage.setItem("addresses", JSON.stringify(filteredAddressBook));
            return filteredAddressBook;
        });
    }

    return (
        <AddressBookContext.Provider value={{
            addressBook,
            addToAddressBook,
            removeFromAddressBook
        }}>
            {children}
        </AddressBookContext.Provider>
    )
}
