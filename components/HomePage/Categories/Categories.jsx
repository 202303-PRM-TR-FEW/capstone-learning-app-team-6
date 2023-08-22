import React from "react";
import styles from "./styles/categories.module.css";
import { FaLightbulb } from "react-icons/fa";
import { AiOutlineStock, AiTwotoneStar } from "react-icons/ai";
import { MdGroups2, MdDraw, MdDesignServices } from "react-icons/md";
import { BsFillDatabaseFill } from "react-icons/bs";

let category = [
  { icon: <AiOutlineStock />, name: "Sales" },
  { icon: <MdGroups2 />, name: "HR" },
  { icon: <MdDraw />, name: "Drawing" },
  { icon: <BsFillDatabaseFill />, name: "Big Data" },
  { icon: <MdDesignServices />, name: "Design" },
  { icon: <FaLightbulb />, name: "Marketing" },
  { icon: <AiTwotoneStar />, name: "Astronomy" },
];

function Categories() {
  return (
    <section className={styles.parent}>
      <h2 className="header-text">Categories</h2>
      <ul>
        {category.map((categoryItem) => (
          <li key={categoryItem.name} className={styles.li}>
            {categoryItem.icon}
            <p className={styles.text}>{categoryItem.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Categories;
