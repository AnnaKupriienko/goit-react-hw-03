import { useState, useEffect } from 'react';
import list from '../../list.json';
import SearchBox from "../SearchBox/SearchBox";
import ContactList from '../ContactList/ContactList';
import ContactForm from "../ContactForm/ContactForm";
import css from "./App.module.css"

export default function App() { 

    const [contacts, setContacts] = useState(() => {
        const savedContacts = localStorage.getItem('contacts');
        if (savedContacts !== null) {
            return JSON.parse(savedContacts)
        }
        return list;
    });

    const [filter, setFilter] = useState("");
        useEffect(() => {
            localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts]);

    const deleteContact = (contactId) => {
        setContacts((prevContacts) => {
            return prevContacts.filter(contact => contact.id !== contactId)
        })
    };

    const filteredContact = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
 
    const addContact = (newContact) => {
        setContacts((prevContact) => {
            return [...prevContact, newContact]
        });
    };
    return (
        <div>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm onSubmit={addContact} />
            <SearchBox value={filter} onChange={setFilter} />
            <ContactList contacts={filteredContact} onDelete={deleteContact} />
        </div>
    );
}
