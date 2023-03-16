import React from "react";
import styles from "../../styles/Home.module.css";

interface VulnerableProps {
  value: string;
}

const FormAction: React.FC<VulnerableProps> = ({ value }) => {
  return (
    <>
      <h2>Form Action manipulation</h2>
      <div className={styles.code}>
        inspect me!
        <form
          action={value}
          method={'post'}
        >
          <button type={'submit'}>SUBMIT</button></form>
      </div>
    </>
  );
};

export default FormAction;
