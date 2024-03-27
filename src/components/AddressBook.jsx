import Contact from "../ui/Contact"

function AddressBook({ addresses, removeContact }) {

    const addressClone = [...addresses];
    addressClone.sort((a, b) => {
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1;
        } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1;
        } else {
            return 0;
        }
    })

    return (
        <ul className="addresses">
            {addressClone.map(address => <Contact key={address.id} address={address} removeContact={removeContact} />)}
        </ul>
    )
}

export default AddressBook;