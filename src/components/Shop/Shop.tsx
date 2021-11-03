import { useState } from "react";
import { useSelector } from "react-redux";
import { ButtonShow } from "../ButtonShow";
import styles from "./Shop.module.css";
import { IShop } from "../../redux/types";
import { IState } from "../../redux/store";
import { Container } from "../Container";
import { ShopCard } from "../ShopCard";

export function getShopPerPage(allShop: IShop[], page: number) {
  return allShop.slice(0, (page + 1) * 3);
}

export const Shop = () => {
  const allShop = useSelector((state: IState) => state.shop.shop);
  const totalPages = allShop.length / 3;
  const [page, setPage] = useState(0);

  const shops = getShopPerPage(allShop, page);

  return (
    <Container title={"Shop"}>
      <div className={styles.content}>
        {shops.map((item) => (
          <ShopCard key={item.id} {...item} />
        ))}
        {totalPages > 1 && page < totalPages ? (
          <ButtonShow
            text={"Показать ещё"}
            onClick={() => {
              const newPage = page + 1;
              setPage(newPage);
            }}
          />
        ) : null}
      </div>
    </Container>
  );
};

/*<div className={styles.shop}id="shop">
<h3 className={styles.shop__title}>Работы выставленные на аукцион:</h3>
<div className={styles.shop__cards}>
  <div className={styles.shop__card}>
    <div className={styles.example__img}></div>
    <p className={styles.description}></p>
    <div className={styles.price}></div>
    <button className={styles.shop__button} onClick={props.onClick}>
      Предложить свою цену
    </button>
  </div>*/
