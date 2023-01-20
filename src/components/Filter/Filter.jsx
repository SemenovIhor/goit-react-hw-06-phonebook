import { useDispatch } from "react-redux";
import { addFilter } from "redux/filterSlice/filterSlice";

export const Filter = () => {

  const dispatch = useDispatch(state => state.filter)

  return (
    <>
      <p>Find contacts by name</p>
      <input 
        onChange={(e) => dispatch(addFilter(e.currentTarget.value))}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  )

}