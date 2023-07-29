import Level from "@/Components/SearchPage/RatingLevel/Level";
import Rating from "@/Components/SearchPage/RatingLevel/Rating";

import styles from "./styles/ratingLevel.module.css";

const RatingLevel = (props) => {
  return (
    <section className={styles.ratingLevelContainer}>
      <Rating />
      <Level />
    </section>
  );
};

export default RatingLevel;
