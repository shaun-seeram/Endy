function AddressAutocomplete({addressList, selectAddress}) {
    return (
        <ul className="addressAutocomplete">
            {addressList.map((address) => {
                return (
                    <li key={address.properties.formatted}>
                        <button onClick={(e) => selectAddress(e, address.properties.formatted)}>{address.properties.formatted}</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default AddressAutocomplete