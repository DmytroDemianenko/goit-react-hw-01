import s from "./Profile.module.css";
const Profile = ({ username, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.thumb}>
        <img
          className={s.picture}
          src={image}
          width="200px"
          alt="User avatar"
        />
        <h2>{username}</h2>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <div>
        <ul className={s.stats}>
          <li className={s.stats_item}>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li className={s.stats_item}>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li className={s.stats_item}>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Profile;
