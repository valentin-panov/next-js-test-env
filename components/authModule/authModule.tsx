import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@mui/material";

interface VulnerableProps {}

const AuthModule: React.FC<VulnerableProps> = () => {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    setAdmin(localStorage.getItem("ROLE") === "admin");
  }, []);
  const handleChange = () => {
    localStorage.setItem("ROLE", admin ? "admin" : "user");
    setAdmin(!admin);
  };

  return (
    <>
      <h2>Admin switcher</h2>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={!admin} onChange={handleChange} name="admin" />
            }
            label="Admin"
          />
        </FormGroup>
      </FormControl>
    </>
  );
};

export default AuthModule;
