import './App.css'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactsJson from "./components/ContactList/Contacts.json";
import ContactForm from './components/ContactForm/ContactForm';

function App() {

  return (
    <>
    <h1>Phonebook</h1>
    <ContactForm  />
    <SearchBox />
    <ContactList />
    </>
  )};

export default App
