import css from "./Contact.module.css"

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
export default function Contact({ id, name, number, onDelete }) {
    return (
        <div className={css.container}>
                <p className={css.text}><IoMdContact className={css.icon} />{name}</p>
                <p className={css.text}><FaPhoneAlt className={css.icon} />{number}</p>
            <button className={css.btnDelete} onClick={() => onDelete(id)}>Delete</button>
            </div>
            
    );
}