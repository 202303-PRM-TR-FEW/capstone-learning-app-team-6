import Level from "@/components/Search Page/rating-level/Level";
import Rating from "@/components/Search Page/rating-level/Rating";

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
