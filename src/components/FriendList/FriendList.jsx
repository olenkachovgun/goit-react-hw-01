import css from "./FriendList.module.css";

import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div>
      <h3>Завдання 2. Список друзів </h3>
      <ul className={css.friendList}>
        {friends.map((friend) => (
          <li className={css.friendItem} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
