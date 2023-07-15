import styles from "./styles/button.module.css";

const Button = ({ children }) => {
  return <button className={styles["course-price"]}>{children}</button>;
};

export default Button;
