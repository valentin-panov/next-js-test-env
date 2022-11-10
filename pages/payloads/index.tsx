import styles from "../../styles/Home.module.css";
import { MainLayout, MuiInput } from "../../components";
import React, { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";

export default function Payloads() {
  const [isLoading, setLoading] = useState(false);
  const [inputString, setInputString] = React.useState(
    "javascript:alert(document.cookie.split(';'))"
  );

  const onChangeInputHandler = (value: string) => {
    setInputString(value);
  };

  const fetchCookies = () => {
    setLoading(true);
    try {
      fetch(`/api/echo/${inputString}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MainLayout>
      <div className={styles.grid}>
        <div className={styles.card}>
          <MuiInput
            value={inputString}
            onChangeHandler={onChangeInputHandler}
          />
          <Button
            onClick={fetchCookies}
            variant={"outlined"}
            fullWidth={true}
            endIcon={
              isLoading ? (
                <CircularProgress size={20} />
              ) : (
                <CookieOutlinedIcon />
              )
            }
          >
            FETCH THE COOKIES
          </Button>
        </div>
        <div className={styles.card}>
          <a
            href={
              "https://portswigger.net/web-security/cross-site-scripting/cheat-sheet"
            }
            className={styles.code}
            target={"_blank"}
            rel="noreferrer"
          >
            https://portswigger.net/web-security/cross-site-scripting/cheat-sheet
          </a>
        </div>
        <div className={styles.card}>
          <a
            href={"https://github.com/payloadbox/xss-payload-list"}
            className={styles.code}
            target={"_blank"}
            rel="noreferrer"
          >
            https://github.com/payloadbox/xss-payload-list
          </a>
        </div>
      </div>
    </MainLayout>
  );
}
