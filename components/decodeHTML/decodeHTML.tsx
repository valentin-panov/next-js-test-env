import React, { useMemo } from "react";
import styles from "../../styles/Home.module.css";
import parse, {
  attributesToProps,
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import { Link, TextField as Text } from "@mui/material";

interface VulnerableProps {
  value: string;
}

/**
 * Function to decode HTML tags in strings that have been encoded.
 * e.g. "&lt;p&gt;Picture messages may not be included in your plan. &lt;&#47;p&gt;"
 * is decoded to  "<p>Picture messages may not be included in your plan.</p>"
 */
export function decodeHtml(unsafeText: string): string {
  const txt = document.createElement("textarea");
  txt.innerHTML = unsafeText;
  return txt.value;
}

const DecodeHTML: React.FC<VulnerableProps> = ({ value }) => {
  const options: HTMLReactParserOptions = useMemo(
    () => ({
      // eslint-disable-next-line react/no-unstable-nested-components
      replace: (domNode: DOMNode) => {
        const element = domNode as Element;

        if (element.type !== "tag" || !element.attribs) {
          return element;
        }

        switch (element.name) {
          case "p":
            return <Text>{domToReact(element.children, options)}</Text>;
          case "a":
            return (
              <Link {...attributesToProps(element.attribs)}>
                {domToReact(element.children, options)}
              </Link>
            );
          default:
            return element;
        }
      },
    }),
    []
  );

  return (
    <>
      <h2>parse(decodeHtml(value), options)</h2>
      <div className={styles.description}>
        Try me!
        <>{parse(decodeHtml(value), options)}</>
      </div>
    </>
  );
};

export default DecodeHTML;

// worked xss
// <img src=xxx:x onerror=javascript:alert(1)> -->
