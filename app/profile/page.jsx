import PersonalInfo from "@/Components/ProfilePage/PersonalInfo/PersonalInfo";
import TotalStatistics from "@/Components/ProfilePage/TotalStatistics/TotalStatistics";
import Achievements from "@/Components/ProfilePage/Achievements/Achievements";
import FriendSuggestions from "@/Components/ProfilePage/FriendSuggestion/friend-suggestion";
import Friends from "@/Components/ProfilePage/Friends/friends";
import Button from "@/Components/ProfilePage/Buttons/buttons";
import styles from "./profilePage.module.css";

const Profile = (props) => {
  return (
    <main className={styles["profile-container"]}>
      <PersonalInfo />
      <TotalStatistics />
      <Achievements />
      <FriendSuggestions />
      <Friends />
      <Button />
    </main>
  );
};

export default Profile;
