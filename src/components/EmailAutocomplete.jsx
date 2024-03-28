import { useContext } from "react";
import { FormContext } from "../store/FormContext";

const EMAIL_ARRAY = ["hotmail.com", "yahoo.com", "gmail.com", "outlook.com", "hotmail.ca", "hotmail.co.uk", "hotmail.fr", "live.com", "yahoo.fr", "yahoo.co.uk", "aol.com", "msn.com", "googlemail.com"];

function EmailAutocomplete() {

    const formCtx = useContext(FormContext)

    // Filters email array for email autocomplete
    const filterEmailArray = () => {
        const provider = formCtx.email.split("@").reverse()[0];
        return EMAIL_ARRAY.filter(email => email.startsWith(provider)).splice(0, 4)
    }

    return (
        <div className="emailAutocomplete">
            {filterEmailArray().map((provider) => <button key={provider} onClick={(e) => formCtx.appendProvider(e, provider)}>{provider}</button>)}
        </div>
    )
}

export default EmailAutocomplete