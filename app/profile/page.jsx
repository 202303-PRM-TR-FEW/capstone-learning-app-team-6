import TotalStatistics from "@/components/Profile Page/total statistics/TotalStatistics";
import Achievements from "@/Components/Profile Page/achievements/Achievements";
import styles from "./profilePage.module.css";

const Profile = (props) => {
  return (
    <main className={styles["profile-container"]}>
      <TotalStatistics />
      <Achievements />
    </main>
  );
};

export default Profile;
