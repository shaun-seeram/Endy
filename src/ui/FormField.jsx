function FormField({id, label, type, value, setFormData, setUserTyping, required}) {

    const onChange = (e) => {
        if (type === "address") {
            setUserTyping(true)
        }
        setFormData(prevValue => {
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
                <input name={id} id={id} type={type} value={value} onChange={onChange} placeholder={label} required={required}></input>
            </div>
        </>
    )
}

export default FormField