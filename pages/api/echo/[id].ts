import { NextApiRequest, NextApiResponse } from "next";

export default function getById(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Set-Cookie", [
    `query=${req.query.id}; path=/; `,
    `check=CHECK; path=/; `,
    `httpOnlyQuery=${req.query.id}; path=/; samesite=lax; httponly;`,
  ]);

  res.status(200).json({ yourId: req.query.id });
}
