import { useSelector } from "react-redux";
import { removeContacts } from "redux/contactsSlice/contactsSlice";
import { useDispatch } from "react-redux";

export const ContactList = function ( ) {
  
  const contacts = useSelector( state => {
    return state.contacts.contacts
  })

  const filter = useSelector( state => {
    return state.filter
  })

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
      );
  }
  const filteredContacts = getFilteredContacts();

  const dispatch = useDispatch()

  const contactDelete = id => {
    dispatch(removeContacts(id))
  }

  return (
      <>
      <ul>
        { filteredContacts.map(({id, ...contacts }) => (
          <li key={id}>
            <p>{contacts.name}:{contacts.number}</p>
            <button type="button"  onClick = {() => contactDelete(id)}>Delete</button>
          </li> 
        ))}
      </ul>
      </>
  );
}