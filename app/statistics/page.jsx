"use client";
import ThisWeek from "@/components/Statistics/ThisWeek/ThisWeek";
import MyPerformance from "@/components/Statistics/MyPerformance/MyPerformance";
import MyActivity from "@/components/Statistics/MyActivity/MyActivity";
import LastYear from "@/components/Statistics/LastYear/LastYear";
import Styles from "./statistics.module.css";

const Statistics = (props) => {
  return (
    <main className={Styles.main}>
      <ThisWeek />
      <div className={Styles.myActivity}>
        <MyActivity />
      </div>
      <MyPerformance />
      <div className={Styles.last}>
        <LastYear />
      </div>
    </main>
  );
};

export default Statistics;
