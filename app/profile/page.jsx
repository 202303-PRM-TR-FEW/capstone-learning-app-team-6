import PersonalInfo from "@/components/ProfilePage/PersonalInfo/PersonalInfo";
import TotalStatistics from "@/components/ProfilePage/TotalStatistics/TotalStatistics";
import Achievements from "@/components/ProfilePage/Achievements/Achievements";
import FriendSuggestions from "@/components/ProfilePage/FriendSuggestion/friend-suggestion";
import Friends from "@/components/ProfilePage/Friends/friends";
import Button from "@/components/ProfilePage/Buttons/buttons";
import styles from "./profilePage.module.css";

const Profile = (props) => {
  return (
    <main className={styles["profile-container"]}>
      <div className={styles["first"]}>
        <PersonalInfo />
        <TotalStatistics />
        <Achievements />
      </div>
      <div className={styles["second"]}>
        <FriendSuggestions />
        <Friends />
        <Button />
      </div>
    </main>
  );
};

export default Profile;