import styles from "../styles/Home.module.css";
import Router from "next/router";
import { Footer, Header, InVulnerableInput, Main } from "../components";
import React, { useMemo, useRef } from "react";
import { Button } from "@mui/material";

export default function Home() {
  const [invulnerableInputString, setInvulnerableInputString] = React.useState(
    '" onclick=alert("XSS")>"@x.y'
  );
  const [vulnerableInputString, setVulnerableInputString] = React.useState(
    '"; onload=alert(1);'
  );
  const codeRef = useRef(null);

  const router = async (url: string): Promise<void> => {
    await Router.push(`${url}`);
  };

  const onChangeInvulnerableInputHandler = (value: string) => {
    setInvulnerableInputString(value);
  };

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVulnerableInputString(event.target.value);
    if (codeRef.current) {
      const element = codeRef.current as HTMLElement;
      element.innerHTML = vulnerableInputString;
    }
  };

  const windowLocationButton = (value: string) => {
    window.location.href = value;
  };

  const xssObject = useMemo((): Record<string, string> => {
    return {
      id: invulnerableInputString,
      "aria-label": invulnerableInputString,
    };
  }, [invulnerableInputString]);

  return (
    <div className={styles.container}>
      <Header />
      <Main>
        <h1 className={styles.title}>Extremely vulnerable NextApp</h1>
        <label htmlFor={"clIn"}>Classic Input</label>
        <input
          id="clIn"
          value={vulnerableInputString}
          onChange={onChangeInputHandler}
        />
        <div className={styles.card}>
          Classic input string:
          <br />
          {vulnerableInputString}
          <br />
          is injected into dangerouslySetInnerHTML
          <script
            data-testid="data-layer"
            dangerouslySetInnerHTML={{
              __html: `window.digitalData=${JSON.stringify(
                vulnerableInputString
              )}`,
            }}
          />
        </div>
        <div className={styles.card}>
          Classic input string:
          <br />
          {vulnerableInputString}
          <br />
          is injected through ref.current.innerHTML:
          <br />
          <code className={styles.description} ref={codeRef}>
            NULL
          </code>
        </div>

        <br />
        <InVulnerableInput
          inputString={invulnerableInputString}
          onChangeHandler={onChangeInvulnerableInputHandler}
        />
        <br />
        <Button
          variant="outlined"
          onClick={() => windowLocationButton(invulnerableInputString)}
        >
          window.location.href=({invulnerableInputString})
        </Button>

        <p className={styles.description + invulnerableInputString}>
          Here is className xss try{" "}
          <code className={styles.code}>{invulnerableInputString}</code>
        </p>
        <br />
        <button
          onClick={() => router(invulnerableInputString)}
          className={invulnerableInputString}
        >
          Router.push({invulnerableInputString})
        </button>
        <br />
        <div {...xssObject}>
          DIV HTML ATTRIBUTES {`{...props} = ${JSON.stringify(xssObject)}`}
        </div>
        <br />
      </Main>

      <Footer />
    </div>
  );
}
