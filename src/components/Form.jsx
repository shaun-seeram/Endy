import { useContext, useState } from "react";
import FormField from "../ui/FormField";
import AddressAutocomplete from "./AddressAutocomplete";
import { FormContext } from "../store/FormContext";
import EmailAutocomplete from "./EmailAutocomplete";

function Form() {

    const formCtx = useContext(FormContext)
    const [userTyping, setUserTyping] = useState(false); // When false, hides the address autocomplete container

    // Computed values instead of state to determine when to show certain containers
    const emailBool = formCtx.email.includes("@") && formCtx.email.split("@").length < 3 && !formCtx.email.split("@")[1].includes(".");
    const addressBool = formCtx.address.length >= 5 && userTyping;

    return (
        <form onSubmit={formCtx.submitFormData}>
            <FormField id="name" label="Name" type="text" required />
            <FormField id="email" label="Email" type="email" required />
            {emailBool && <EmailAutocomplete />}
            <FormField id="address" label="Address" type="address" setUserTyping={setUserTyping} />
            {addressBool && <AddressAutocomplete userTyping={userTyping} setUserTyping={setUserTyping} />}
            <div className="formOptions">
                <button className="button">Add to Contacts</button>
            </div>
        </form>
    )
}

export default Form;