import { createContext, useState } from "react";

export const FormContext = createContext({
    name: "",
    email: "",
    address: "",
    setFormData: () => {}
})

export default function FormContextProvider({children}) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: ""
    });

    return (
        <FormContext.Provider value={{
            name: formData.name,
            email: formData.email,
            address: formData.address,
            setFormData
        }}>
            {children}
        </FormContext.Provider>
    )
}