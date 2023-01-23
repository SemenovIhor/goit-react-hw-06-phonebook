import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "redux/contactsSlice/contactsSlice";
import { getContacts } from 'redux/selectors/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.elements.name;
    const number = form.elements.number;
    const contact = {name: name.value , number: number.value, id: nanoid()}
    
    if (contacts.some(contactInput => contactInput.name.toLowerCase() === contact.name.toLowerCase())) {
      alert("Hello");
    } else {
      dispatch(addContacts(contact))
      form.reset()
    };
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />  
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>  
    </>
)

}