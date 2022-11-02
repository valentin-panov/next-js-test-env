import React, { useEffect, useRef } from "react";
import styles from "../../styles/Home.module.css";

interface VulnerableProps {
  value: string;
}

const RefInnerHTML: React.FC<VulnerableProps> = ({ value }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      const element = codeRef.current as HTMLElement;
      element.innerHTML = value;
    }
  }, [value]);

  return (
    <>
      <h2>ref.current.innerHTML</h2>
      <p className={styles.description}>
        Inspect me!
        <br />
        <code className={styles.code} ref={codeRef}>
          NULL
        </code>
      </p>
    </>
  );
};

export default RefInnerHTML;
