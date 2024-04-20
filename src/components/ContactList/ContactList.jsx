export default function ContactList({ name, number }) {
    return (
        <li>
            <p>Name: {name}</p>
            <p>Number: {number}</p>
        </li>
    );
}