"use strict";
(() => {
var exports = {};
exports.id = 907;
exports.ids = [907];
exports.modules = {

/***/ 776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ echo)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function echo(req, res) {
    res.json({
        name: "John Doe"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(776));
module.exports = __webpack_exports__;

})();