import { useState } from "react"

function FormField({containerName, id, label, type}) {

    return (
        <>
            <div className={containerName}>
                <label htmlFor={id}>{label}</label>
                <input id={id} type={type}></input>
            </div>
        </>
    )
}

export default FormField