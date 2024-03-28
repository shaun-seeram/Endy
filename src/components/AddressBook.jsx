import { useContext } from "react";
import Contact from "../ui/Contact"
import { AddressBookContext } from "../store/AddressBookContext";

function AddressBook() {

    const addressBookCtx = useContext(AddressBookContext)

    // Clones (since state) and sorts addressbook in alphabetical order
    const addressClone = [...addressBookCtx.addressBook];
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
            {addressClone.map(address => <Contact key={address.id} address={address} />)}
        </ul>
    )
}

export default AddressBook;