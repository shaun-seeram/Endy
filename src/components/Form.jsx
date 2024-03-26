import { useState } from "react";
import FormField from "../ui/FormField";

function Form({onSubmit}) {

    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const onSubmitHandler = (e) => {
        onSubmit(e)
        setFormData({
            name: "",
            email: ""
        })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <FormField containerName="nameContainer" id="name" label="Name" type="text" value={formData.name} onChangeHandler={setFormData} />
            <FormField containerName="emailContainer" id="email" label="Email" type="email" value={formData.email} onChangeHandler={setFormData} />
            <input value="Add to Contacts" type='submit' />
        </form>
    )
}

export default Form;











// import { useRef, useState } from "react";
// import FormField from "../ui/FormField";

// function Form({onSubmitHandler}) {

//     const x = useRef();
//     const y = useRef();

//     const sub = (e) => {
//         onSubmitHandler(e)
//         x.current.reset()
//         y.current.reset()
//     }

//     return (
//         <form onSubmit={sub}>
//             <FormField containerName="nameContainer" id="name" label="Name" type="text" ref={x} />
//             <FormField containerName="emailContainer" id="email" label="Email" type="email" ref={y} />
//             <input value="Add to Contacts" type='submit' />
//         </form>
//     )
// }

// export default Form;