function FormField({id, label, type, value, onChangeHandler, onUserTyping}) {

    const onChange = (e) => {
        if (type === "address") {
            onUserTyping(true)
        }
        onChangeHandler(prevValue => {
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
                <input name={id} id={id} type={type} value={value} onChange={onChange} placeholder={label} required></input>
            </div>
        </>
    )
}

export default FormField