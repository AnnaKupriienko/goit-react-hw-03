import { useState, useEffect} from 'react';

import SearchBox from "../SearchBox/SearchBox";
import ContactList from '../ContactList/ContactList';
import ContactForm from "../ContactForm/ContactForm";
import css from "./App.module.css"

export default function App() {
    const contacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    const [contact, setContacts] = useState(contacts);
    const [filterContact, setFilter] = useState("");

    const deleteContact = (contactId) => {
        setContacts((prevContacts) => {
            return prevContacts.filter(contact => contact.id !== contactId)
        })
    };
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    };
    const filteredContact = contact.filter((item) => item.name.toLocaleLowerCase().includes(filterContact.toLocaleLowerCase()))
 
    const addContact = (newContact) => {
        setContacts((prevContact) => {
            return [...prevContact, newContact]
        });
    };
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contact)),
        [contact]
    });
    return (
        <div>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm onSubmit={addContact} />
            <SearchBox value={filterContact} onChange={handleFilterChange} />
            <ContactList contacts={filteredContact} onDelete={deleteContact} />
        </div>
    );
}
