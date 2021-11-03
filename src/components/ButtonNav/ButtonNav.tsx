import styles from "./ButtonNav.module.css";


export function ButtonNav(props:{onClick:()=>void}) {
  return(
  <button className={styles.button} onClick={props.onClick}> Оформить заявку</button>
  );
}
