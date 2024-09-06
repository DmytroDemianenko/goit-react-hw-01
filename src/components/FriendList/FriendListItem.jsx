import s from "./FriendsList.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <div className={s.thumb}>
        <img src={avatar} alt="Avatar" width="48" />
        <p> {name}</p>
        <p className={(isOnline && s.statusActive) || s.status}>
          {(isOnline && "Online") || "Offline"}
        </p>
      </div>
    </>
  );
};
export default FriendListItem;
