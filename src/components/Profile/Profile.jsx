import s from "./Profile.module.css";
const Profile = ({ username, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.thumb}>
        <img
          className={s.picture}
          src={image}
          width="100px"
          height="100px"
          alt="User avatar"
        />
        <h2 className={s.title}>{username}</h2>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <div>
        <ul className={s.stats}>
          <li>
            <div className={s.stats_item}>
              <span className={s.label}>Followers</span>
              <span className={s.quantity}>{stats.followers}</span>
            </div>
          </li>
          <li>
            <div className={s.stats_item}>
              <span className={s.label}>Views</span>
              <span className={s.quantity}>{stats.views}</span>
            </div>
          </li>
          <li>
            <div className={s.stats_item}>
              <span className={s.label}>Likes</span>
              <span className={s.quantity}>{stats.likes}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Profile;
