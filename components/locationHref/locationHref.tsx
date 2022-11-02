import React from "react";
import { Button } from "@mui/material";

interface VulnerableProps {
  route: string;
}

const LocationHref: React.FC<VulnerableProps> = ({ route }) => {
  const windowLocationButton = (value: string) => {
    window.location.href = value;
  };

  return (
    <div>
      <h2>window.location.href = {route}</h2>
      <Button variant="outlined" onClick={() => windowLocationButton(route)}>
        TRY ME!
      </Button>
    </div>
  );
};

export default LocationHref;
