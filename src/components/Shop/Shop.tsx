import styles from "./Shop.module.css";

export function Shop() {
  return (
    <div className={styles.shop}>
      <h3 className={styles.shop__title}>Работы выставленные на аукцион:</h3>
      <div className={styles.shop__cards}>
        <div className={styles.shop__card}>
          <div className={styles.example__img}></div>
          <p className={styles.description}></p>
          <div className={styles.price}></div>
          <button className={styles.shop__button}>Предложить свою цену</button>
        </div>
        <div className={styles.shop__card}>
          <div className={styles.example__img}></div>
          <p className={styles.description}></p>
          <div className={styles.price}></div>
          <button className={styles.shop__button}>Предложить свою цену</button>
        </div>
        <div className={styles.shop__card}>
          <div className={styles.example__img}></div>
          <p className={styles.description}></p>
          <div className={styles.price}></div>
          <button className={styles.shop__button}>Предложить свою цену</button>
        </div>
      </div>
    </div>
  );
}
