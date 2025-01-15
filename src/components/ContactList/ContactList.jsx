import { useSelector } from "react-redux";
import s from "../Contact/Contact.module.css"
import Contact from "../Contact/Contact";
const ContactList = () => {    
const contactsList = useSelector(state => state.contacts.contacts.items);
const filterByName = useSelector(state => state.filters.filters.name);

const filteredContacts = contactsList.filter( i => i.name.toLowerCase().includes(filterByName.toLowerCase()) )



return (
    <ul className={s.contactsList}>
        {filteredContacts.map(({ id, name, number }) =>
        <li  key={id} className={s.contactItem} >
            <Contact  id={id} name={name} number={number}/>
            </li>)}
    </ul>
)
};

export default ContactList;
