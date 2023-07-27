import PersonalInfo from "@/Components/Profile Page/PersonalInfo/PersonalInfo";
import TotalStatistics from "@/Components/Profile Page/TotalStatistics/TotalStatistics";
import Achievements from "@/Components/Profile Page/Achievements/Achievements";
import FriendSuggestions from "@/Components/Profile Page/FriendSuggestion/friend-suggestion";
import Friends from "@/Components/Profile Page/Friends/friends";
import Button from "@/Components/Profile Page/Buttons/buttons";
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
