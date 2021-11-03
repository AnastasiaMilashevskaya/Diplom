import { ReactNode } from "react";
import styles from "./Modal.module.css";
interface IProps {
  children: ReactNode;
  title: string;
  onClose: () => void;
  isDisplay: boolean;
}
export const Modal = ({ title, children, onClose, isDisplay }: IProps) => {
  return isDisplay ? (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.btn} onClick={onClose}>
          <div className={styles.btn_close}></div>
          </div>
          <h2 className={styles.title}>{title}</h2>
          {children}
        </div>
      </div>
    </>
  ) : null;
};
