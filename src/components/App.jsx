import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList'
import { Filter } from "./Filter/Filter";
import { useSelector } from "react-redux";

export const App = () => {

  const contacts = useSelector( state => {
    return state.contacts.contacts
  })

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm
        />  
      </Section>
      <Section title="Contacts">
      {contacts.length !== 0 && (
        <>
          <Filter
          />
          <ContactList
          />
        </>
      )}
      </Section>
    </div>
  );
}