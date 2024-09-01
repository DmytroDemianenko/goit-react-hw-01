// import { useState } from "react";
import "./App.css";
import Profile from "./Profile/Profile";
import userData from "./userData.json";
import FriendList from "./FriendList/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

function App() {
  // console.log(transactions);
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
