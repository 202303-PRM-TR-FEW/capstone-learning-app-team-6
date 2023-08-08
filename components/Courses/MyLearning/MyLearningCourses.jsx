import DisplayMyLearning from "@/components/HomePage/MyLearning/DisplayMyLearning";
import Button from "@/components/UI/Button";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import Link from "next/link";
import Styles from "./styles/MyLearningCourses.module.css";
const MyLearningCourses = (props) => {
  return (
    <section style={{ paddingTop: "3rem" }}>
      <div style={{display:"flex"}}>
        <h2 className="header-text">{props.header}</h2>
        <Link href="/statistics">
          <h5 className={Styles.statistics}>
            <EqualizerIcon style={{ fontSize: "2.5rem" ,marginRight:"1rem"}} />
            Statistics
          </h5>
        </Link>
      </div>
      <ul>
        <DisplayMyLearning
          AllCourses={props.courses}
          isButton={props.isButton}
        ></DisplayMyLearning>
      </ul>
    </section>
  );
};

export default MyLearningCourses;
