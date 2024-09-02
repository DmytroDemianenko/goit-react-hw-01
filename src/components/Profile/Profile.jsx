import s from "./Profile.module.css";
const Profile = (userData) => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.thumb}>
          <img
            className={s.picture}
            src={userData.avatar}
            width="200px"
            alt="User avatar"
          />
          <h2>{userData.username}</h2>
          <p>@{userData.tag}</p>
          <p>{userData.location}</p>
        </div>
        <div>
          <ul className={s.stats}>
            <li className={s.stats_item}>
              <span>Followers</span>
              <span>{userData.stats.followers}</span>
            </li>
            <li className={s.stats_item}>
              <span>Views</span>
              <span>{userData.stats.views}</span>
            </li>
            <li className={s.stats_item}>
              <span>Likes</span>
              <span>{userData.stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Profile;
