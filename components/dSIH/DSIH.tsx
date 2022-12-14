import React from "react";
import styles from "../../styles/Home.module.css";

interface VulnerableProps {
  value: string;
}

const DSIH: React.FC<VulnerableProps> = ({ value }) => {
  return (
    <>
      <h2>dangerouslySetInnerHTML in div</h2>
      <div className={styles.code}>
        inspect me!
        <div
          dangerouslySetInnerHTML={{
            __html: `${value}`,
          }}
        />
      </div>
    </>
  );
};

export default DSIH;
