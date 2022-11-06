import styles from "../../styles/Home.module.css";
import {
  ExampleRouter,
  LocationHref,
  MainLayout,
  MuiInput,
  WindowOpen,
} from "../../components";
import React from "react";

export default function Rest() {
  const [inputString, setInputString] = React.useState("javascript:alert(1)");

  const onChangeInputHandler = (value: string) => {
    setInputString(value);
  };

  return (
    <MainLayout>
      <h2>REST</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <MuiInput
            value={inputString}
            onChangeHandler={onChangeInputHandler}
          />
        </div>

        <div className={styles.card}>
          <ExampleRouter route={inputString} />
        </div>
        <div className={styles.card}>
          <LocationHref route={inputString} />
        </div>
        <div className={styles.card}>
          <WindowOpen value={inputString} />
        </div>
      </div>
    </MainLayout>
  );
}
