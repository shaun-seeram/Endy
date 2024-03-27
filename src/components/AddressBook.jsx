import Contact from "../ui/Contact"

function AddressBook({ addresses }) {
    return (
        <ul className="addresses">
            {addresses.map((address) => {
                return (
                    <Contact key={address.id} address={address} />
                )
            })}
        </ul>
    )
}

export default AddressBook