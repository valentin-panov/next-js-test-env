import React from "react";
import styles from "../../styles/Home.module.css";

interface VulnerableProps {
  value: string;
}

const DSIH: React.FC<VulnerableProps> = ({ value }) => {
  return (
    <>
      <h2>dangerouslySetInnerHTML</h2>
      <div className={styles.code}>
        inspect me!
        <script
          data-testid="data-layer"
          dangerouslySetInnerHTML={{
            __html: `window.digitalData=${JSON.stringify(value)}`,
          }}
        />
      </div>
    </>
  );
};

export default DSIH;
