

import { IShop } from "../../redux/types";
import styles from "./ShopCard.module.css";

export const ShopCard = ({ image, title, text}: IShop) => {


  return (
    <div className={styles.shop__cards}>
    <div className={styles.shop__card}>
    <h3 className={styles.shop__title}>{title}</h3>
      <img className={styles.example__img} src={image}></img>
      <p className={styles.description}>{text}</p>
      <div className={styles.price}></div>
      <button className={styles.shop__button} >
        Предложить свою цену
      </button>
    </div>
    </div>
  );
};