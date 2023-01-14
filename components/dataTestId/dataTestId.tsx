import React from "react";
import styles from "../../styles/Home.module.css";

interface VulnerableProps {
  value: string;
}

const DataTestId: React.FC<VulnerableProps> = ({ value }) => {
  return (
    <>
      <h2>div.data-testid=testId</h2>
      <div className={styles.description} data-testid={value}>
        Inspect me!
      </div>
    </>
  );
};

export default DataTestId;

// worked xss
// <img src=xxx:x onerror=javascript:alert(1)> -->
