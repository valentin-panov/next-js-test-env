import React from "react";
import styles from "../../styles/Home.module.css";

interface VulnerableProps {
  value: string;
}

const ClassN: React.FC<VulnerableProps> = ({ value }) => {
  return (
    <>
      <h2>className injection</h2>
      <div className={styles.code}>
        <p className={value}>
          I&apos;m a &lt;p&nbsp;className={`{payload} /`}&gt;. Inspect me!
        </p>
      </div>
    </>
  );
};

export default ClassN;
