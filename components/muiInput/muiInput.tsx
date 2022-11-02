import React from "react";
import { Box, TextField } from "@mui/material";

interface VulnerableProps {
  inputString: string;
  onChangeHandler: (value: string) => void;
}

const MuiInput: React.FC<VulnerableProps> = ({
  inputString,
  onChangeHandler,
}) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h2>MUI INPUT</h2>
      <TextField
        id="outlined-user-input"
        label="MUI INPUT"
        variant={"outlined"}
        value={inputString}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChangeHandler(event.target.value)
        }
      />
    </Box>
  );
};

export default MuiInput;
