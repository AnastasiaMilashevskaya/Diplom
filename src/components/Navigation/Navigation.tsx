
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
export function Navigation() {
  return (
    <nav className={styles.nav}>
      <h3 className={styles.nav__title}>ArtWikipedia</h3>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <a className={styles.link_style} href="#about">
            О нас
          </a>
        </li>
        <li className={styles.nav__item}>
        <a className={styles.link_style} href="#shop">
         Каталог
          </a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.link_style} href="#contact">
            Контакты
          </a>
        </li>
       
      </ul>
    </nav>
  );
}

