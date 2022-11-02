import styles from "../styles/Home.module.css";
import {
  ClassicInput,
  ClassN,
  DSIH,
  ExampleRouter,
  Footer,
  Header,
  HtmlAttr,
  LocationHref,
  Main,
  MuiInput,
  RefInnerHTML,
} from "../components";
import React from "react";

const basePath = "http://localhost:3000/";

export default function Home() {
  const [muiInputString, setMuiInputString] = React.useState(
    '" onclick=alert("XSS")>"@x.y'
  );
  const [classicInputString, setClassicInputString] = React.useState(
    '"; onload=alert(1);'
  );

  const onChangeMuiInputHandler = (value: string) => {
    setMuiInputString(value);
    setClassicInputString(value);
  };

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClassicInputString(event.target.value);
    setMuiInputString(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Header />
      <Main>
        <h1 className={styles.title}>Vulnerable NextApp</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <ClassicInput
              value={classicInputString}
              onChangeHandler={onChangeInputHandler}
            />
          </div>
          <div className={styles.card}>
            <MuiInput
              inputString={muiInputString}
              onChangeHandler={onChangeMuiInputHandler}
            />
          </div>
          <div className={styles.card}>
            <ExampleRouter route={classicInputString} basePath={basePath} />
          </div>
          <div className={styles.card}>
            <LocationHref route={classicInputString} />
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
            <HtmlAttr value={classicInputString} />
          </div>
        </div>
      </Main>

      <Footer />
    </div>
  );
}
