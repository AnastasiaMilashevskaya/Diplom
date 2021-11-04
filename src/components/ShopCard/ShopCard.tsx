

import { useHistory } from "react-router-dom";
import { IShop } from "../../redux/types";
import styles from "./ShopCard.module.css";
import { Modal } from "../Modal";
import { useState } from "react";
export const ShopCard = ({ image, title, text, id,author}: IShop) => {
  const history = useHistory();

  return (
    <div
      className={styles.shop__cards}
      onClick={() => history.push(`/shops/${id}`)}
    >
      <img className={styles.example__img} src={image} />
      <div className={styles.shop__card}>
        <h3 className={styles.shop__title}>{title}</h3>
        <p className={styles.description}>{text}</p>
        <p className={styles.author}>{author}</p>
      </div>
      <button className={styles.shop__button} >
        Предложить свою цену
      </button>
    </div>
  );
};

