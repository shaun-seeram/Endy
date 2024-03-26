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
                <input name={id} id={id} type={type} value={value} onChange={onChange}></input>
            </div>
        </>
    )
}

export default FormField











// import { useState } from "react"

// import {forwardRef, useImperativeHandle} from "react";

// const FormField = forwardRef(function FormField({containerName, id, label, type}, ref) {

//     const [data, setData] = useState("");

//     useImperativeHandle(ref, () => {
//         return {
//             reset() {
//                 setData("");
//             }
//         }
//     });

//     const dataChangeHandler = (e) => {
//         setData(e.target.value)
//     }

//     return (
//         <>
//             <div className={containerName}>
//                 <label htmlFor={id}>{label}</label>
//                 <input name={id} id={id} type={type} value={data} onChange={dataChangeHandler}></input>
//             </div>
//         </>
//     )

// })

// export default FormField