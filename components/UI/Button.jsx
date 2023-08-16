import styles from "./styles/button.module.css";

const Button = (props, { children }) => {
  return (
    <button className={styles["course-price"]} onClick={props.onClick}>
      {children}
    </button>
  );
};

export default Button;
