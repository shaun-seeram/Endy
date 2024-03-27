import { useState } from "react";
import FormField from "../ui/FormField";

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
            <FormField id="name" label="Name" type="text" value={formData.name} onChangeHandler={setFormData} />
            <FormField id="email" label="Email" type="email" value={formData.email} onChangeHandler={setFormData} />
            <div className="formOptions">
                <button className="button">Add to Contacts</button>
            </div>
        </form>
    )
}

export default Form;