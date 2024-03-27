function Contact({address}) {

    let initials = "";

    const initialsArr = address.name.split(" ").map((name) => {
        return name.split("")[0]
    })

    initialsArr.splice(1, address.name.split(" ").length - 2)

    initialsArr.forEach((letter) => {
        initials += letter.toUpperCase()
    })

    return (
        <li>
            <p className="contactLeft">{initials}</p>
            <div className="contactRight">
                <p>{address.name}</p>
                <p>{address.email}</p>
            </div>
        </li>
    )
}

export default Contact;