import Styles from "./styles/friend-suggestion.module.css";

let friendSuggestions = [
  { name: "Laura Evans", img: "https://i.pravatar.cc/400?img=1" },
  { name: "Alexander Thompson", img: "https://i.pravatar.cc/400?img=13" },
];

export default function FriendSuggestions() {
  return (
    <>
      <div className={Styles.container}>
        <div>
          <h1 className={Styles.title}>Friend Suggestions</h1>
        </div>
        <div className={Styles.friendsContainer}>
          <ul className={`${Styles.friendSuggestions} rounded-t-[20px]`}>
            {friendSuggestions.map((friend) => (
              <li key={friend.name} className={Styles.newFriend}>
                <img src={friend.img} className={Styles.friendImg} />
                <h3 className={Styles.friendName}>{friend.name}</h3>
                <div className={Styles.btnAddFriend}>
                  <button className={Styles.addFriend}>+</button>
                  <button className={Styles.friendClose}>X</button>
                </div>
                <hr className={Styles.horizontalLine} />
              </li>
            ))}
            <p
              className={`${Styles.viewAllFriendSuggestions} rounded-b-[20px]`}
            >
              View All
            </p>
          </ul>
        </div>
      </div>
    </>
  );
}
