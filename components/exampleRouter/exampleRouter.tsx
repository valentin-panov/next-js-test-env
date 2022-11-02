import React from "react";
import Router from "next/router";

interface VulnerableProps {
  route: string;
}

const ExampleRouter: React.FC<VulnerableProps> = ({ route }) => {
  const router = async (url: string): Promise<void> => {
    await Router.push(`${url}`);
  };

  return (
    <div>
      <h3>next/router.push({route})</h3>
      <button onClick={() => router(route)}>PUSH</button>
    </div>
  );
};

export default ExampleRouter;
