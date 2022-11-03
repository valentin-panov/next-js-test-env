import React from "react";
import { Button } from "@mui/material";

interface VulnerableProps {
  value: string;
}

const WindowOpen: React.FC<VulnerableProps> = ({ value }) => {
  const windowOpenButton = (value: string) => {
    window.open(value, "_blank")?.focus();
  };

  return (
    <div>
      <h2>window.open(payload, &quot;_blank&quot;)?.focus();</h2>
      <Button variant="outlined" onClick={() => windowOpenButton(value)}>
        TRY ME!
      </Button>
    </div>
  );
};

export default WindowOpen;
