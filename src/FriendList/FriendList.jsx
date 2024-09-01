import s from "./FriendsList.module.css";
import FriendListItem from "./FriendListItem";
const FriendList = ({ friends }) => {
  return (
    <ul className={s.wrapper}>
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
export default FriendList;
