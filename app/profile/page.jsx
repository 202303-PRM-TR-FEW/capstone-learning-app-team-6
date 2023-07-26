import PersonalInfo from "@/components/Profile Page/personal info/PersonalInfo";
import TotalStatistics from "@/components/Profile Page/total statistics/TotalStatistics";
import Achievements from "@/components/Profile Page/achievements/Achievements";
import FriendSuggestions from "@/components/Profile Page/friend suggestion/friend-suggestion";
import Friends from "@/components/Profile Page/friends/friends";
import Button from "@/components/Profile Page/buttons/buttons";
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
