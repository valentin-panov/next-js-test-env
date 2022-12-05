import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

interface VulnerableProps {
  value: string;
}

const NextImage: React.FC<VulnerableProps> = ({ value }) => {
  return (
    <>
      <h2>next.Image src=value</h2>
      <p className={styles.description}>
        Inspect me!
        <br />
        <Image alt="nextImage" src={value} width={30} height={30} />
      </p>
    </>
  );
};

export default NextImage;

// worked xss
// <img src=xxx:x onerror=javascript:alert(1)> -->
