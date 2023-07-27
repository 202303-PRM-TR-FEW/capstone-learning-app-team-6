import Level from "@/Components/Search Page/RatingLevel/Level";
import Rating from "@/Components/Search Page/RatingLevel/Rating";

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
