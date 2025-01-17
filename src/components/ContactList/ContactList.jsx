import s from "../Contact/Contact.module.css"
import { selectContacts } from "../../redux/contactsSlice"
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {    
const contacts = useSelector(selectContacts);
const filter = useSelector(selectNameFilter);
const filterByValue = contacts.filter( item => item.name.toLowerCase().includes(filter.toLowerCase()))
return (
    <ul className={s.contactsList}>
        {filterByValue.map(({ id, name, number }) =>
        <li  key={id} className={s.contactItem} >
            <Contact  id={id} name={name} number={number}/>
            </li>)}
    </ul>
)
};

export default ContactList;
