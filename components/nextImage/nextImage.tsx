import React from "react";
import styles from "../../styles/Home.module.css";
import { Image } from "../../packages";

interface VulnerableProps {
  value: string;
}

const NextImage: React.FC<VulnerableProps> = ({ value }) => {
  return (
    <>
      <h2>Image package test</h2>
      <p className={styles.description}>
        Inspect me!
        <br />
        <Image alt="testImage" src={value} lazyLoaded={false} />
      </p>
    </>
  );
};

export default NextImage;

// worked xss
// <img src=xxx:x onerror=javascript:alert(1)> -->
