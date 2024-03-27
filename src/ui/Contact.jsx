function Contact({address, removeContact}) {

    const initialsArr = address.name.toUpperCase().split(" ").map(name => name.split("")[0]);
    initialsArr.splice(1, address.name.split(" ").length - 2);
    const initials = initialsArr.join("");

    return (
        <li>
            <p className="contactLeft" aria-hidden>{initials}</p>
            <div className="contactRight">
                <p>{address.name}</p>
                <p>{address.email}</p>
                <p>{address.address}</p>
            </div>
            <button className="removeButton" onClick={() => removeContact(address.id)}>X</button>
        </li>
    )
}

export default Contact;