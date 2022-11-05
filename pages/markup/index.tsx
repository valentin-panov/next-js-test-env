import styles from "../../styles/Home.module.css";
import {
  ClassicInput,
  ClassN,
  ClassnamesTest,
  ClsxTest,
  DSIH,
  HtmlAttr,
  MainLayout,
  RefInnerHTML,
  SlugHref,
} from "../../components";
import React from "react";

export default function Markup() {
  const [classicInputString, setClassicInputString] = React.useState(
    '"; onload=alert(1);'
  );

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClassicInputString(event.target.value);
  };

  return (
    <MainLayout>
      <div className={styles.grid}>
        <div className={styles.card}>
          <ClassicInput
            value={classicInputString}
            onChangeHandler={onChangeInputHandler}
          />
        </div>

        <div className={styles.card}>
          <DSIH value={classicInputString} />
        </div>
        <div className={styles.card}>
          <RefInnerHTML value={classicInputString} />
        </div>
        <div className={styles.card}>
          <ClassN value={classicInputString} />
        </div>
        <div className={styles.card}>
          <ClassnamesTest value={classicInputString} />
        </div>
        <div className={styles.card}>
          <ClsxTest value={classicInputString} />
        </div>
        <div className={styles.card}>
          <HtmlAttr value={classicInputString} />
        </div>

        <div className={styles.card}>
          <SlugHref value={classicInputString} />
        </div>
      </div>
    </MainLayout>
  );
}