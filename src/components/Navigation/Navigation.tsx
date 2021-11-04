
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
export function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.nav__title} to="/" >ArtWikipedia</NavLink>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
        <NavLink className={styles.link_style} to="/about" >
            О нас
            </NavLink>
        </li>
        <li className={styles.nav__item}>
        <NavLink className={styles.link_style} to="/shop" >
         Каталог
          </NavLink>
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

