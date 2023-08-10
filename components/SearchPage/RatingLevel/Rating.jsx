"use client";
import styles from "./styles/rating.module.css";
import * as React from "react";
import Rating from "@mui/material/Rating";

const Rate = (props) => {
  const [value, setValue] = React.useState(0);

  return (
    <section>
      <h2 className={styles.header}>RATING</h2>
      <Rating
        style={{ color: "rgb(46 141 255)", fontSize: "3.3rem" }}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          props.rateValueProp(newValue);
        }}
      ></Rating>
    </section>
  );
};

export default Rate;
