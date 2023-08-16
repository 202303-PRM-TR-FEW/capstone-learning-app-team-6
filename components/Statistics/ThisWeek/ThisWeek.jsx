import { Progress } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Styles from "./styles/ThisWeek.module.css";
import StarIcon from "@mui/icons-material/Star";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";

function ThisWeek() {
  return (
    <div className={Styles.container}>
      <h3 style={{ marginTop: "4rem", marginBottom: "2rem" }}>This Week</h3>
      <div
        style={{
          border: "1px solid rgb(209, 209, 209)",
          borderRadius: "2rem",
          backgroundColor: "white",
        }}
      >
        <h6
          style={{
            marginLeft: "3rem",
            marginTop: "2rem",
            fontSize: "1.2rem",
          }}
        >
          TIME SPENT
        </h6>
        <h6 style={{ marginLeft: "3rem" }}>31.8 hours</h6>
        <ul className={Styles.parent}>
          <ProgressLin value={60} day={"Mon"} />
          <ProgressLin value={50} day={"Tue"} />
          <ProgressLin value={70} day={"Wed"} />
          <ProgressLin value={50} day={"Thu"} />
          <ProgressLin value={40} day={"Fri"} />
          <ProgressLin value={70} day={"Sat"} />
          <ProgressLin value={70} day={"Sun"} />
        </ul>
      </div>
      <div style={{ display: "flex" }}>
        <div className={Styles.goal}>
          <AdjustOutlinedIcon /> GOAL
          <div
            style={{
              backgroundColor: "rgb(228 241 255)",
              color: "rgb(68 153 255)",
              borderRadius: "1rem",
              padding: "2rem",
              marginTop: "1rem",
              fontWeight: "700",
            }}
          >
            2/3 days
          </div>
        </div>
        <div className={Styles.streak}>
          <StarIcon />
          STREAK
          <div
            style={{
              backgroundColor: "rgb(239 248 227)",
              color: "rgb(167 207 115)",
              borderRadius: "1rem",
              padding: "2rem",
              marginTop: "1rem",
              fontWeight: "700",
            }}
          >
            103 days
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThisWeek;

function ProgressLin({ value, day }) {
  return (
    <li className={Styles.child}>
      <Progress.Line
        percent={value}
        vertical={true}
        showInfo={false}
        status="active"
        strokeWidth={12}
        className={Styles.ProgressLine}
      />
      <h6 className={Styles.day}>{day}</h6>
    </li>
  );
}
