import styles from "../../styles/Home.module.css";
import {
  ClassicInput,
  ClassN,
  ClassnamesTest,
  ClsxTest,
  CreateElement,
  DataTestId,
  DecodeHTML,
  DSIH,
  DSIHDataLayer,
  HtmlAttr,
  MainLayout,
  NextImage,
  RefInnerHTML,
  SlugHref,
} from "../../components";
import React from "react";

export default function Markup() {
  const [classicInputString, setClassicInputString] = React.useState(
    "/<img src=xxx:x onerror=alert(event.currentTarget.parentNode)> -->"
  );

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClassicInputString(event.target.value);
  };

  return (
    <MainLayout keywords={"markup, injection"}>
      <h2>Markup injection</h2>
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
          <DSIHDataLayer value={classicInputString} />
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
        <div className={styles.card}>
          <CreateElement
            value={"div"}
            props={{ "data-label": classicInputString }}
          >
            <h2>{`React.createElement(type, props, children) with payload=${classicInputString}`}</h2>
            {classicInputString}
          </CreateElement>
        </div>
        <div className={styles.card}>
          <NextImage value={classicInputString}></NextImage>
        </div>
        <div className={styles.card}>
          <DataTestId value={classicInputString}></DataTestId>
        </div>
        <div className={styles.card}>
          <DecodeHTML value={classicInputString} />
        </div>
      </div>
    </MainLayout>
  );
}
