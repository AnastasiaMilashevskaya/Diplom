import { useHistory } from "react-router-dom";
import { IShop } from "../../redux/types";
import styles from "./ShopCard.module.css";

interface IProps extends IShop {
  onClick: () => void;
}

export const ShopCard = ({
  image,
  title,
  text,
  id,
  author,
  onClick,
}: IProps) => {
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
      <button
        className={styles.shop__button}
        onClick={(event) => {
          event.stopPropagation();
          onClick();
        }}
      >
        Предложить свою цену
      </button>
    </div>
  );
};
