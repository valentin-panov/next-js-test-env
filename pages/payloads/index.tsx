import styles from "../../styles/Home.module.css";
import { MainLayout } from "../../components";
import React from "react";

export default function Payloads() {
  return (
    <MainLayout>
      <div className={styles.grid}>
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
