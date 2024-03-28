import { useContext } from "react"
import { FormContext } from "../store/FormContext"

function FormField({id, label, type, setUserTyping, required}) {

    const formCtx = useContext(FormContext)

    const onChange = (e) => {
        if (type === "address") {
            setUserTyping(true)
        }
        formCtx.setFormData(prevValue => {
            return {
                ...prevValue,
                [id]: e.target.value
            }
        })
    }

    return (
        <>
            <div className="formFieldContainer">
                <label htmlFor={id} className="sr-only">{label}</label>
                <input name={id} id={id} type={type} value={formCtx[id]} onChange={onChange} placeholder={label} required={required}></input>
            </div>
        </>
    )
}

export default FormField