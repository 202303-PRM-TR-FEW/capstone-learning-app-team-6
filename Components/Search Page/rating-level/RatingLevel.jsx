import Level from "@/Components/Search Page/rating-level/Level";
import Rating from "@/Components/Search Page/rating-level/Rating";

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
