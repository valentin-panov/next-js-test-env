import styles from "../styles/Home.module.css";
import Router from "next/router";
import { Footer, Header, Main, VulnerableInput } from "../components";
import React from "react";

export default function Home() {
  const [inputString, setInputString] = React.useState(
    '" onclick=alert("XSS")>"@x.y'
  );

  const router = async (url: string): Promise<void> => {
    await Router.push(`${url}`);
  };

  const onChangeInputHandler = (value: string) => {
    setInputString(value);
  };

  return (
    <div className={styles.container}>
      <Header />
      <Main>
        <h1 className={styles.title}>Extremely vulnerable NextApp</h1>
        <br />
        <VulnerableInput
          inputString={inputString}
          onChangeHandler={onChangeInputHandler}
        />

        <p className={styles.description + inputString}>
          Here is className xss try{" "}
          <code className={styles.code}>[{inputString}]</code>
        </p>
        <br />
        <button onClick={() => router(inputString)} className={inputString}>
          ROUTE ME TO {inputString}
        </button>
      </Main>

      <Footer />
    </div>
  );
}
