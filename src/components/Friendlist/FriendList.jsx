import FriendListItem from "../FriendListItem/FriendListItem"
import css from "./Friendlist.module.css"

export default function FriendList({friends}) {
    return (
        <ul className={css.list}>
            {friends.map((element) => (
               <li className={css.item} key={element.id}>
                    <FriendListItem friend={element}/>
            </li>  
            ))}
        </ul>
    );
}