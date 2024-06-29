import s from "./FriendListItem.module.css";
import clsx from "clsx";

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

export default FriendListItem;
