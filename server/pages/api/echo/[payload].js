"use strict";
(() => {
var exports = {};
exports.id = 353;
exports.ids = [353];
exports.modules = {

/***/ 7915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ putTheCookies)
/* harmony export */ });
const token = "sdfasdfasdfasdf";
const expiresAt = "123123123124124123123";
function putTheCookies(req, res) {
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
        `refresh-token=${token}; Expires=${expiresAt}; Secure; SameSite=Lax; HttpOnly=true;`
    ]);
    res.status(200).json({
        yourId: req.query.payload
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7915));
module.exports = __webpack_exports__;

})();