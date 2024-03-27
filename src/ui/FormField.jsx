function FormField({containerName, id, label, type, value, onChangeHandler}) {

    const onChange = (e) => {
        onChangeHandler((prevValue) => {
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