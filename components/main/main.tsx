import styles from "../../styles/Home.module.css";
import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
