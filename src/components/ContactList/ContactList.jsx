import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
export default function ContactList({ contacts, onDelete }) {
    return (
        <ul>
                {contacts.map(contact =>
                    <li className={css.list} key={contact.id}>
                        <Contact name={contact.name} number={contact.number} id={contact.id} onDelete={onDelete} />
                    </li>  )
         }

            </ul>
            )}