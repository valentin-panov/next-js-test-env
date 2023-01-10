import { NextApiResponse, NextPageContext } from "next";

const ctxHandler = async (
  ctx: NextPageContext,
  res: NextApiResponse
): Promise<any> => {
  console.log(ctx.query);
  const data = {
    query: "pdpUserUpgradeEligibilityQuery",
    variables: { bundleSeoId: ctx.query.bundleSeoId },
    errorPolicy: "all",
    fetchPolicy: "cache-first",
  };
  return res.status(200).json(data);
};

export default ctxHandler;

// http://localhost:3000/api/ctx/1?bundleSeoId=%3Cscript%3Ealert(1)%3C/script%3E
