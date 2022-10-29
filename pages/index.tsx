import styles from "../styles/Home.module.css";
import Router from "next/router";
import { Footer, Header, InVulnerableInput, Main } from "../components";
import React, { useMemo } from "react";
import { Button } from "@mui/material";

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

  const windowLocationButton = (value: string) => {
    window.location.href = value;
  };

  const xssObject = useMemo((): Record<string, string> => {
    return { id: inputString, "aria-label": inputString };
  }, [inputString]);

  return (
    <div className={styles.container}>
      <Header />
      <Main>
        <h1 className={styles.title}>Extremely vulnerable NextApp</h1>
        <br />
        <InVulnerableInput
          inputString={inputString}
          onChangeHandler={onChangeInputHandler}
        />
        <br />
        <Button
          variant="outlined"
          onClick={() => windowLocationButton(inputString)}
        >
          window.location.href=({inputString})
        </Button>

        <p className={styles.description + inputString}>
          Here is className xss try{" "}
          <code className={styles.code}>{inputString}</code>
        </p>
        <br />
        <button onClick={() => router(inputString)} className={inputString}>
          Router.push({inputString})
        </button>
        <br />
        <div {...xssObject}>
          DIV HTML ATTRIBUTES {`{...props} = ${xssObject.toString()}`}
        </div>
      </Main>

      <Footer />
    </div>
  );
}
