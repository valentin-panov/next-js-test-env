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
      <h3>window.location.href = {route}</h3>
      <Button variant="outlined" onClick={() => windowLocationButton(route)}>
        GO
      </Button>
    </div>
  );
};

export default LocationHref;
