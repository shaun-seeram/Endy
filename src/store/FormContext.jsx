import { createContext, useContext, useState } from "react";
import { AddressBookContext } from "./AddressBookContext";

export const FormContext = createContext({
    name: "",
    email: "",
    address: "",
    setFormData: () => {},
    appendProvider: (e, provider) => {},
    submitFormData: () => {}
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
        setFormData((prevFormData) => {
            let formatEmail = prevFormData.email.split("@")
            formatEmail.pop();

            return {
                ...prevFormData,
                email: formatEmail.join("") + "@" + provider
            }
        })
    }

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