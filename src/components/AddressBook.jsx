function AddressBook({addresses}) {
    return (
        addresses.map((address) => {
            return (
                <p id={address.id} key={address.id}>{address.name}'s email is {address.email}</p>
            )
        })
    )
}

export default AddressBook