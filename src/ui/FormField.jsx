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
            <div className={containerName}>
                <label htmlFor={id}>{label}</label>
                <input name={id} id={id} type={type} value={value} onChange={onChange} required></input>
            </div>
        </>
    )
}

export default FormField