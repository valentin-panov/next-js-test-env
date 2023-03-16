"use strict";
(() => {
var exports = {};
exports.id = 187;
exports.ids = [187];
exports.modules = {

/***/ 9905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ctxHandler = async (ctx, res)=>{
    console.log(ctx.query);
    const data = {
        query: "pdpUserUpgradeEligibilityQuery",
        variables: {
            bundleSeoId: ctx.query.bundleSeoId
        },
        errorPolicy: "all",
        fetchPolicy: "cache-first"
    };
    return res.status(200).json(data);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ctxHandler); // http://localhost:3000/api/ctx/1?bundleSeoId=%3Cscript%3Ealert(1)%3C/script%3E


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9905));
module.exports = __webpack_exports__;

})();