import { NextApiRequest, NextApiResponse } from "next";

const token = "sdfasdfasdfasdf";
const expiresAt = "123123123124124123123";

export default function putTheCookies(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query.payload);
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Set-Cookie", [
    `cookieHost=${req.headers.host}; path=/; `,
    `query=${req.query.payload}; path=/; `,
    `sameSiteNone_Secure=${req.query.payload}; path=/; samesite=none; secure`,
    `sameSiteLax=${req.query.payload}; path=/; samesite=lax;`,
    `sameSiteStrict=${req.query.payload}; path=/; samesite=strict;`,
    `httpOnly_SameSiteLax=${req.query.payload}; path=/; samesite=lax; httponly;`,
    `httpOnly_SameSiteStrict=${req.query.payload}; path=/; samesite=strict; httponly;`,
    `__Host-cookie=${req.query.payload}; path=/; `,
    `__Secure-cookie=${req.query.payload}; path=/; `,
    `sameSiteNone=${req.query.payload}; path=/; samesite=none;`,
    `refresh-token=${token}; Expires=${expiresAt}; Secure; SameSite=Lax; HttpOnly=true;`,
  ]);

  res.status(200).json({ yourId: req.query.payload });
}
