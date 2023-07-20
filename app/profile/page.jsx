import TotalStatistics from "@/components/Profile Page/total statistics/TotalStatistics";
import Achievements from "@/Components/Profile Page/achievements/Achievements";
import FriendSuggestions from "@/Components/Profile Page/friend suggestion/friend-suggestion";
import Friends from "@/Components/Profile Page/friends/friends";
import Button from "@/Components/Profile Page/buttons/buttons";
import styles from "./profilePage.module.css";

const Profile = (props) => {
  return (
    <main className={styles["profile-container"]}>
      <TotalStatistics />
      <Achievements />
      <FriendSuggestions />
      <Friends />
      <Button />
    </main>
  );
};

export default Profile;
