import styles from "./styles/level.module.css";
let category = [
  { name: "Beginner" },
  { name: "Intermediate" },
  { name: "Professional" },
];
const Level = (props) => {
  return (
    <section >
      <h2 className={styles.header}>LEVEL</h2>
      <ul>
        {category.map((category) => (
          <li className={styles.category}>
            <input type="checkbox" className={styles.checkbox} />
            {category.name}
          </li>
        ))}
      </ul>
    </section>
  );
};


export default Level;
