import { ReactNode } from "react";

import styles from "./Container.module.css";

interface IProps {
  children: ReactNode;
  title?: string;
}

export const Container = ({ children, title }: IProps) => {
  return (
    <div className={styles.container}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      <div>{children}</div>
    </div>
  );
};