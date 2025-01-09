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
      <h2>
        Завдання 1 <br />
        Профіль соціальної мережі
      </h2>
      <div className={css.profile}>
        <div>
          <img className={css.image} src={image} alt="User avatar" />
          <p>{username}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>

        <ul className={css.listStats}>
          <li className={css.listItem}>
            <span>Followers</span>
            <span>{followers}</span>
          </li>
          <li className={css.listItem}>
            <span>Views</span>
            <span>{views}</span>
          </li>
          <li className={css.listItem}>
            <span>Likes</span>
            <span>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
