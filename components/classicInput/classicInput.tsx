import React from "react";

interface VulnerableProps {
  value: string;
  onChangeHandler: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

const ClassicInput: React.FC<VulnerableProps> = ({
  value,
  onChangeHandler,
}) => {
  return (
    <>
      <h2>Classic input field</h2>
      <label htmlFor={"clIn"}>Classic Input: </label>
      <input id="clIn" value={value} onChange={onChangeHandler} />
    </>
  );
};

export default ClassicInput;
