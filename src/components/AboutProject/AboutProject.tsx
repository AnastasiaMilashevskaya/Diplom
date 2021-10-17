import styles from "./AboutProject.module.css";

export function AboutProject() {
  return (
    <div className={styles.about}>
      <h2 className={styles.about__title}>Наша история</h2>
      <div className={styles.about__body}></div>
      <div className={styles.about__info}> </div>
      <h3 className={styles.about__subtitle}>
        Проект <span className={styles.text__yellow}>ArtWikipedia</span> -
        крупнейшая онлайн-платформа Беларуси, работающая на рынке
        изобразительного искусства и дизайна, использующая современные и
        эффективные технологии электронной торговли и предоставления услуг.
      </h3>
      <p className={styles.about__text}>
        Каталог ArtWikipedia включает в себя более 1000 произведений искусства и
        постоянно обновляется, что позволяет выбрать достойный вариант как
        профессиональному коллекционеру, так и начинающему ценителю искусства.
        Наша платформа позволит Вам найти картину или скульптуру, которая станет
        идеальным подарком коллеге или руководителю, замечательным украшением
        для Вашего офиса или первым шагом в создании корпоративной или частной
        коллекции. ArtWikipedia позволит оперативно выбрать нужное Вам
        произведение искусства, услугу или сопутствующий товар, основываясь на
        Вашем бюджете, цели покупки, цветовом решении или совокупности
        нескольких задач.
      </p>
      <div className={styles.about__card}> </div>
      <div className={styles.about__joker}></div>
      <div className={styles.about__ship}></div>
      <div className={styles.about__wolves}></div>
    </div>
  );
}
