import css from "./Profile.module.css";

function Profile({
  name: username,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div>
      <h3>
        Завдання 1.
        Профіль соціальної мережі
      </h3>
      <div className={css.profile}>
        <div>
          <img className={css.image} src={image} alt="User avatar" />
          <p className={css.username}>{username}</p>
          <p className={css.name}>@{tag}</p>
          <p className={css.name}> {location}</p>
        </div>

        <ul className={css.listStats}>
          <li className={css.listItem}>
            <span>Followers</span>
            <span className={css.bold}>{followers}</span>
          </li>
          <li className={css.listItem}>
            <span>Views</span>
            <span className={css.bold}>{views}</span>
          </li>
          <li className={css.listItem}>
            <span>Likes</span>
            <span className={css.bold}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
