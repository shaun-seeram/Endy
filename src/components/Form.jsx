import FormField from "../ui/FormField";

function Form() {
    return (
        <form>
            <FormField containerName="nameContainer" id="name" label="Name" type="text" />
            <FormField containerName="emailContainer" id="email" label="Email" type="email" />
            <input value="Add to Contacts" type='submit' />
        </form>
    )
}

export default Form;