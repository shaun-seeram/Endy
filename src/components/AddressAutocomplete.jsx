import { useContext, useEffect, useState } from "react";
import { FormContext } from "../store/FormContext";

function AddressAutocomplete({userTyping, setUserTyping}) {

    const formCtx = useContext(FormContext)
    const [addressList, setAddressList] = useState([]);
    const addressBool = formCtx.address.length >= 5 && userTyping;

    useEffect(() => {
        if (addressBool) {
            // Only when 5 or more characters in the address input, should this fetch run
            fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${formCtx.address}&apiKey=b9a3cf7884c546088568357b84a0902d`)
                .then(response => response.json())
                .then(result => setAddressList(result.features))
                .catch(error => console.log('error', error));
        }
    }, [addressBool, formCtx.address])

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

    return (
        <ul className="addressAutocomplete">
            {addressList.map((address) => {
                return (
                    <li key={address.properties.formatted}>
                        <button onClick={(e) => selectAddress(e, address.properties.formatted)}>{address.properties.formatted}</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default AddressAutocomplete