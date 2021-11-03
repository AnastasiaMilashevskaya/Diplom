import { ReactNode } from "react";
import styles from "./Form.module.css";
interface IProps {
    children: ReactNode;
    title: string;
    onClose:() => void;
    isVisible:boolean;
    
}
export const Form = ({ title, children, onClose, isVisible }: IProps) => {
  return isVisible ? (
    <>
     
      <div className={styles.container} >
     
        <div className={styles.content}>
        <div className={styles.btn} onClick={onClose}>
    <span className={styles.top}></span>
    <span className={styles.bot}></span>
</div>
         
          <h2 className={styles.title}>{title}</h2>
          {children}
        </div>
      </div>
    </>
  ) : null;
};