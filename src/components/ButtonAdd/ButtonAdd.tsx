import styles from "./ButtonAdd.module.css";
interface IProps {
    onClick:()=>void;

    
    
}

export function ButtonAdd({ onClick}: IProps) {
 
  return(
  <button className={styles.button} onClick={onClick} > Отправить</button>

  );
  
}

