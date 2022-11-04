import React from "react";
import cx from "clsx";
import styles from "../../styles/Home.module.css";

interface VulnerableProps {
  value: string;
}

const ClsxTest: React.FC<VulnerableProps> = ({ value }) => {
  return (
    <div>
      <h2>NPM CLSX</h2>
      <div className={cx(styles.code, value)}>
        &lt;div classNames=&#123;cx(styles.code, {value})&#125;&#39;&gt;Inspect
        me!&lt;/div&gt;
      </div>
    </div>
  );
};

export default ClsxTest;
