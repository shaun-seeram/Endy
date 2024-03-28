import { useContext, useEffect, useState } from "react";
import FormField from "../ui/FormField";
import AddressAutocomplete from "./AddressAutocomplete";
import { AddressBookContext } from "../store/AddressBookContext";
import { FormContext } from "../store/FormContext";

const EMAIL_ARRAY = ["hotmail.com", "yahoo.com", "gmail.com", "outlook.com", "hotmail.ca", "hotmail.co.uk", "hotmail.fr", "live.com", "yahoo.fr", "yahoo.co.uk", "aol.com", "msn.com", "googlemail.com"];

function Form() {

    const addressBookCtx = useContext(AddressBookContext);
    const formCtx = useContext(FormContext)

    const [autocompleteAddress, setAutocompleteAddress] = useState([]);
    const [userTyping, setUserTyping] = useState(false);

    const emailBool = formCtx.email.includes("@") && formCtx.email.split("@").length < 3 && !formCtx.email.split("@")[1].includes(".");
    const addressBool = formCtx.address.length >= 5 && userTyping;

    useEffect(() => {
        if (addressBool) {
            fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${formCtx.address}&apiKey=b9a3cf7884c546088568357b84a0902d`)
                .then(response => response.json())
                .then(result => setAutocompleteAddress(result.features))
                .catch(error => console.log('error', error));
        }
    }, [addressBool, formCtx])

    const filterEmailArray = () => {
        const provider = formCtx.email.split("@").reverse()[0];
        return EMAIL_ARRAY.filter(email => email.startsWith(provider)).splice(0, 4)
    }

    const appendProvider = (e, provider) => {
        e.preventDefault();
        formCtx.setFormData((prevFormData) => {
            let formatEmail = prevFormData.email.split("@")
            formatEmail.pop();

            return {
                ...prevFormData,
                email: formatEmail.join("") + "@" + provider
            }
        })
    }

    const selectAddress = (e, address) => {
        e.preventDefault();
        formCtx.setFormData((prevFormData) => {
            return {
                ...prevFormData,
                address: address
            }
        })
        setUserTyping(false)
    }

    const formSubmitHandler = (e) => {
        addressBookCtx.addToAddressBook(e);
        formCtx.setFormData({
            name: "",
            email: "",
            address: ""
        })
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <FormField id="name" label="Name" type="text" required />
            <FormField id="email" label="Email" type="email" required />
            {emailBool && (
                <div className="emailAutocomplete">
                    {filterEmailArray().map((provider) => <button key={provider} onClick={(e) => appendProvider(e, provider)}>{provider}</button>)}
                </div>
            )}
            <FormField id="address" label="Address" type="address" setUserTyping={setUserTyping} />
            {addressBool && <AddressAutocomplete addressList={autocompleteAddress} selectAddress={selectAddress} />}
            <div className="formOptions">
                <button className="button">Add to Contacts</button>
            </div>
        </form>
    )
}

export default Form;