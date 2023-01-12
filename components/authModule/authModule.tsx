import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@mui/material";

interface VulnerableProps {
  admin: {
    isAdmin: boolean;
    setIsAdmin: (arg0: boolean) => void;
  };
}

const AuthModule: React.FC<VulnerableProps> = ({
  admin: { isAdmin, setIsAdmin },
}) => {
  const handleChange = () => {
    localStorage.setItem("ROLE", !isAdmin ? "admin" : "non-admin");
    setIsAdmin(!isAdmin);
  };

  return (
    <>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Grant role</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={isAdmin} onChange={handleChange} name="admin" />
            }
            label="Admin"
          />
        </FormGroup>
      </FormControl>
    </>
  );
};

export default AuthModule;
