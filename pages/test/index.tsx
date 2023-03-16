import styles from "../../styles/Home.module.css";
import { ClassicInput, MainLayout } from "../../components";
import React from "react";
import { Link } from "../../packages";

export default function Rest() {
  const [inputString, setInputString] = React.useState("javascript:alert(1)");

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputString(event.target.value);
  };

  return (
    <MainLayout>
      <h2>REST</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <ClassicInput
            value={inputString}
            onChangeHandler={onChangeInputHandler}
          />
        </div>

        <div className={styles.card}>
          <Link href={inputString}>{inputString}</Link>
        </div>
      </div>
    </MainLayout>
  );
}
