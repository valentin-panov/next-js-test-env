import React from "react";
import { useRouter } from "next/router";

interface VulnerableProps {
  to: string;
}

const NextRedirect: React.FC<VulnerableProps> = ({ to }) => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push(to).finally();
  }
  return <div></div>;
};

export default NextRedirect;
