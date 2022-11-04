import React, { useEffect, useState } from "react";
import Router from "next/router";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface VulnerableProps {
  route: string;
}

const ExampleRouter: React.FC<VulnerableProps> = ({route}) => {
  const [switcher, setSwitcher] = useState<string>("0");
  const [payload, setPayload] = useState<string>("");
  const [basePath, setBasePath] = useState<string>("");

  useEffect(() => {
    setBasePath(window.location.href)
  }, [])

  useEffect(() => {
    setPayload(`${switcher === "1" ? window.location.href + "/" : ""}${route}`);
  }, [route, switcher]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSwitcher((event.target as HTMLInputElement).value);
  };

  const router = async (payload: string): Promise<void> => {
    await Router.push(payload);
  };

  return (
      <div
          style={{display: "flex", flexDirection: "column", alignItems: "center"}}
      >
      <h2>next/router.push(payload)</h2>
      <FormControl>
        <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={switcher}
            onChange={handleChange}
        >
          <FormControlLabel value="0"
                            control={<Radio/>}
                            label={route}/>
          <FormControlLabel
              value="1"
              control={<Radio/>}
              label={basePath + "/" + route}
          />
        </RadioGroup>
      </FormControl>
      <Button variant={"outlined"}
              onClick={() => router(payload)}>
        TRY ME!
      </Button>
    </div>
  );
};

export default ExampleRouter;
