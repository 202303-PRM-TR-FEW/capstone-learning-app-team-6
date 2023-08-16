import Styles from "./styles/friends.module.css";

let friends = [
  { name: "William Walker", img: "https://i.pravatar.cc/48?u=499476" },
  { name: "Anna Clarke", img: "https://i.pravatar.cc/400?img=47" },
];

export default function Friends() {
  return (
    <>
      <div className={Styles.container}>
        <div>
          <h1 className={Styles.title}>Friends</h1>

          <div className={Styles.friendsContainer}>
            <ul className={`${Styles.friends} rounded-t-[20px]`}>
              {friends.map((friend) => (
                <li key={friend.name} className={Styles.newFriend}>
                  <img src={friend.img} className={Styles.friendImg} />
                  <h3 className={Styles.friendName}>{friend.name}</h3>
                  <div className={Styles.btnAddFriend}>
                    <p className={Styles.profile}>PROFILE</p>
                  </div>
                  <hr className={Styles.horizontalLine} />
                </li>
              ))}
              <p className={`${Styles.viewAllFriends} rounded-b-[20px]`}>
                View All
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
