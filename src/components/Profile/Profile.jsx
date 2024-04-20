import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.card}>
      <div className={css.user}>
        <img className={css.logotype}
          src={image} width={150}
          alt="User avatar"
        />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.stat}>Followers</span>
          <span className={css.values}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.stat}>Views</span>
          <span className={css.values}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.stat}>Likes</span>
          <span className={css.values}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
