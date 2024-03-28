function EmailAutocomplete({ filterEmailArray, appendProvider }) {
    return (
        <div className="emailAutocomplete">
            {filterEmailArray().map((provider) => <button key={provider} onClick={(e) => appendProvider(e, provider)}>{provider}</button>)}
        </div>
    )
}

export default EmailAutocomplete