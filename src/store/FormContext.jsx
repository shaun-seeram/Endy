import { createContext, useContext, useState } from "react";
import { AddressBookContext } from "./AddressBookContext";

export const FormContext = createContext({
    name: "",
    email: "",
    address: "",
    setFormData: () => {},
    appendProvider: (e, provider) => {},
    submitFormData: (e) => {}
})

// Managing form states
export default function FormContextProvider({children}) {

    const addressBookCtx = useContext(AddressBookContext)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: ""
    });

    const appendProvider = (e, provider) => {
        e.preventDefault();

        // Splitting unfinished email at the @ and deleting the second half. Replacing with the appended provider in the return
        setFormData((prevFormData) => {
            let formatEmail = prevFormData.email.split("@")
            formatEmail.pop();

            return {
                ...prevFormData,
                email: formatEmail.join("") + "@" + provider
            }
        })
    }

    // Submit and clear form
    const submitFormData = (e) => {
        addressBookCtx.addToAddressBook(e);
        setFormData({
            name: "",
            email: "",
            address: ""
        })
    }

    return (
        <FormContext.Provider value={{
            name: formData.name,
            email: formData.email,
            address: formData.address,
            setFormData,
            appendProvider,
            submitFormData
        }}>
            {children}
        </FormContext.Provider>
    )
}