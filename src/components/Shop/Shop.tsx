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
  const allShop = useSelector((state: IState) => state.shops.shops);
  const totalPages = allShop.length / 3;
  const [page, setPage] = useState(0);

  const shops = getShopPerPage(allShop, page);

  return (
    <Container title={"Работы выставленные на аукцион:"}>
      <div className={styles.content}>
        <ShopCard
          id={1}
          image={
            "https://sun2.beltelecom-by-minsk.userapi.com/impg/5hF7_lSrWHEGqBNHjqsSaIPc1t1s5g6eHmGsWg/8wu8ddqEdVA.jpg?size=1920x1427&quality=96&sign=ef0a500ad83b6e40f7a018abc3f1aa8c&type=album"
          }
          text={
            "Эта картина лучший подарок🖤 Никому не продам, просто показываю...(Акрил.Холст 40x60)"
          }
          title={"Малыш Йода"}
          author={"Артём Шлеменков"}
        />
        <ShopCard
          id={2}
          image={
            "https://sun9-33.userapi.com/impg/LDz_2Zb42di5QOEktrQUHF4oSAUQLzDAQH03VA/GzNKnuglCxo.jpg?size=819x536&quality=96&sign=2a13c3b2586f985d15a5af7dfdfa55e8&type=album"
          }
          text={
            "Вино в Туссенте льется рекой, музыка звучит беспрестанно, а воздух повсюду полон птичьими трелями и пеньем прелестниц...(Акрил.Холст 40x60)"
          }
          title={""}
          author={"Артём Шлеменков"}
        />
        <ShopCard
          id={3}
          image={
            "https://cs1.livemaster.ru/storage/ab/c9/2c37093a005a06b45a46b56b3agd--kartiny-i-panno-kartina-maslom-krasota-prirody.jpg"
          }
          text={
            "Брызнули первые искры рассвета,Дымкой туманной покрылся ручей.В утренний час его рокот звончей.Ночь умирает…"
          }
          title={"Рассвет на хуторе"}
          author={"Женщина,32 года"}
        />
        <ShopCard
          id={4}
          image={
            "https://sun9-46.userapi.com/impg/eG4CVqI4YnEmN8WSEE_1iW07opkBrYJa78QiAg/RNIYz8RMYuo.jpg?size=690x544&quality=96&sign=8cb373591b340a15b3fd8c1a49be8b72&type=album"
          }
          text={"Одинокий воин (Акрил.Холст 40x60)"}
          title={""}
          author={"Артём Шлеменков"}
        />
        <ShopCard
          id={5}
          image={
            "https://oir.mobi/uploads/posts/2021-04/1618523429_18-oir_mobi-p-irisi-maslom-tsveti-krasivo-foto-18.jpg"
          }
          text={"Какава красота"}
          title={"Ирис"}
          author={"Варвара Бехтерева"}
        />
        <ShopCard
          id={6}
          image={
            "https://sun9-48.userapi.com/impg/W-N_897ml_Ct-79-aRNxwa4QRW556uo22ZvtCA/GpiaDyG9C6c.jpg?size=807x539&quality=96&sign=32f553e4700dc3fb252410bcd10156d1&type=album"
          }
          text={"This is the way"}
          title={""}
          author={"Артём Шлеменков"}
        />
        <ShopCard
          id={7}
          image={"https://cdn1.ozone.ru/s3/multimedia-u/6036106014.jpg"}
          text={"Окружающий мир кажется мёртвым, и Амели живёт мечтами…"}
          title={"Амели"}
          author={"Alla Milash"}
        />
        <ShopCard
          id={8}
          image={
            "https://cs5.pikabu.ru/post_img/big/2014/11/23/10/1416758795_428690899.JPG"
          }
          text={"Угу-угу"}
          title={"Филин Дмитрий"}
          author={"Дмитрий Беляев"}
        />
        <ShopCard
          id={9}
          image={"https://pbs.twimg.com/media/DXCq8l_XcAIL4Ne.jpg"}
          text={"Улыбаемся и машем, парни. Улыбаемся и машем!"}
          title={""}
          author={"Revan"}
        />
        <ShopCard
          id={10}
          image={
            "https://i11.fotocdn.net/s112/82cccba40a453512/public_pin_l/2509690254.jpg"
          }
          text={
            "Это нормально — потерять себя на некоторое время. В книгах, в музыке, в искусстве. Позволь себе заблудиться."
          }
          title={""}
          author={"Миранда"}
        />
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
