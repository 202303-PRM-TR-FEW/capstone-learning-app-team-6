import Level from "@/components/SearchPage/RatingLevel/Level";
import Rating from "@/components/SearchPage/RatingLevel/Rating";
import styles from "./styles/ratingLevel.module.css";

const RatingLevel = (props) => {
  return (
    <section className={styles.ratingLevelContainer}>
      <Rating rateValueProp={props.rateValueProp} />
      <Level levelsCheckedArray={props.levelsCheckedArray} />
    </section>
  );
};

export default RatingLevel;
