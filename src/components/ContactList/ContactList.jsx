import { useSelector } from "react-redux";
import { removeContacts } from "redux/contactsSlice/contactsSlice";
import { useDispatch } from "react-redux";
import { getContacts } from 'redux/selectors/selectors';
import { getFilter } from 'redux/selectors/selectors';

export const ContactList = function ( ) {
  
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)

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