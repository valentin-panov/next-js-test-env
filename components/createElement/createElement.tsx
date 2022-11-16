import React from "react";

interface VulnerableProps {
  value: string;
  children: React.ReactNode | React.ReactNode[];
  props: Record<string, unknown>;
}

const CreateElement: React.FC<VulnerableProps> = ({
  value,
  props,
  children,
}) => {
  return React.createElement(value, props, children);
};

export default CreateElement;
