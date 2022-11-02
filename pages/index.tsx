import styles from "../styles/Home.module.css";
import {
  ExampleRouter,
  Footer,
  Header,
  InVulnerableInput,
  LocationHref,
  Main,
} from "../components";
import React, { useMemo, useRef } from "react";

export default function Home() {
  const [invulnerableInputString, setInvulnerableInputString] = React.useState(
    '" onclick=alert("XSS")>"@x.y'
  );
  const [vulnerableInputString, setVulnerableInputString] = React.useState(
    '"; onload=alert(1);'
  );
  const codeRef = useRef(null);

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

        <div className={styles.grid}>
          <div className={styles.card}>
            <label htmlFor={"clIn"}>Classic Input</label>
            <input
              id="clIn"
              value={vulnerableInputString}
              onChange={onChangeInputHandler}
            />
          </div>
          <div className={styles.card}>
            <InVulnerableInput
              inputString={invulnerableInputString}
              onChangeHandler={onChangeInvulnerableInputHandler}
            />
          </div>
          <div className={styles.card}>
            <ExampleRouter route={vulnerableInputString} />
          </div>{" "}
          <div className={styles.card}>
            <LocationHref route={invulnerableInputString} />
          </div>
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
          <div className={styles.card}>
            <p className={styles.description + invulnerableInputString}>
              Here is className xss try{" "}
              <code className={styles.code}>{invulnerableInputString}</code>
            </p>
          </div>
          <div className={styles.card}>
            <div {...xssObject}>
              DIV HTML ATTRIBUTES {`{...props} = ${JSON.stringify(xssObject)}`}
            </div>
          </div>
        </div>
      </Main>

      <Footer />
    </div>
  );
}
