import clsx from "clsx";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendsList}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.card}>
      <img className={s.avatar} src={avatar} alt="Avatar" width={48} />
      <p className={s.name}>{name}</p>
      <p className={clsx(isOnline ? s.green : s.red)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendList;
