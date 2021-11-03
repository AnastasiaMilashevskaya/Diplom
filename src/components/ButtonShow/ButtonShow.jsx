
import styles from "./ButtonShow.module.css";

export function ButtonShow({ text,  onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
}