import { useState } from "react";
import FormField from "../ui/FormField";
import { Link } from "react-router-dom";

function Form({onSubmit}) {

    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const formSubmitHandler = (e) => {
        onSubmit(e)
        setFormData({
            name: "",
            email: ""
        })
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <FormField containerName="nameContainer" id="name" label="Name" type="text" value={formData.name} onChangeHandler={setFormData} />
            <FormField containerName="emailContainer" id="email" label="Email" type="email" value={formData.email} onChangeHandler={setFormData} />
            <input value="Add to Contacts" type='submit' />
            <Link to="/address-book" className="">Link Name</Link>
        </form>
    )
}

export default Form;