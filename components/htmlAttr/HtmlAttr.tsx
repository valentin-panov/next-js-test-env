import React, { useMemo } from "react";
import styles from "../../styles/Home.module.css";

interface VulnerableProps {
  value: string;
}

const HtmlAttr: React.FC<VulnerableProps> = ({ value }) => {
  const xssObject = useMemo((): Record<string, string> => {
    return {
      id: value,
      "aria-label": value,
    };
  }, [value]);

  return (
    <>
      <h2>DIV HTML ATTRIBUTES</h2>
      <div className={styles.code} {...xssObject}>
        I&apos;m a &lt;div&nbsp;{`{...payload}/`}&gt;. Inspect me!
        {/*{"<" + `div {...props} = ${JSON.stringify(xssObject)}` + "/"}*/}
      </div>
    </>
  );
};

export default HtmlAttr;
