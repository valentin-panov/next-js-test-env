import React from "react";
import cn from "classnames";
import styles from "../../styles/Home.module.css";

interface VulnerableProps {
  value: string;
}

const ClassnamesTest: React.FC<VulnerableProps> = ({ value }) => {
  return (
    <div>
      <h2>NPM CLASSNAMES</h2>
      <div className={cn(styles.code, value)}>
        &lt;div classNames=&#123;cn(styles.code, {value})&#125;&#39;&gt;Inspect
        me!&lt;/div&gt;
      </div>
    </div>
  );
};

export default ClassnamesTest;
