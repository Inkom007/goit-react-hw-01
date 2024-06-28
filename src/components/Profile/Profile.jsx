import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.userCard}>
      <div className={s.info}>
        <img className={s.image} src={image} />
        <p className={s.name}>{name} </p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.dataInfo}>
        <li className={s.dataInfoItem}>
          <span className={s.text}>Followers</span>
          <span className={s.numbers}>{stats.followers}</span>
        </li>
        <li className={s.dataInfoItem}>
          <span className={s.text}>Views</span>
          <span className={s.numbers}>{stats.views}</span>
        </li>
        <li className={s.dataInfoItem}>
          <span className={s.text}>Likes</span>
          <span className={s.numbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
