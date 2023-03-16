import styles from "../../styles/Home.module.css";
import { DSIH, MainLayout, RefInnerHTML } from "../../components";
import React from "react";
import { useRouter } from "next/router";

const QueryInjection: React.FC = () => {
  const router = useRouter();
  const { query } = router;
  const payload = query.payload as string;
  const malicious = `<img src="1" href="1" onerror="alert(1)"/>`;
  return (
    <MainLayout keywords={"markup, injection"}>
      <h2>Markup injection from URL</h2>
      <p className={styles.code}>
        TRY ME OUT:
        {malicious}
      </p>
      <div className={styles.grid}>
        <div className={styles.card}>
          <DSIH value={payload} />
        </div>
        <div className={styles.card}>
          <RefInnerHTML value={payload} />
        </div>
        {/*<div className={styles.card}>*/}
        {/*  <ClassN value={payload} />*/}
        {/*</div>*/}
        {/*<div className={styles.card}>*/}
        {/*  <ClassnamesTest value={payload} />*/}
        {/*</div>*/}
        {/*<div className={styles.card}>*/}
        {/*  <ClsxTest value={payload} />*/}
        {/*</div>*/}
        {/*<div className={styles.card}>*/}
        {/*  <HtmlAttr value={payload} />*/}
        {/*</div>*/}

        {/*<div className={styles.card}>*/}
        {/*  <SlugHref value={payload} />*/}
        {/*</div>*/}
      </div>
    </MainLayout>
  );
};

export default QueryInjection;
