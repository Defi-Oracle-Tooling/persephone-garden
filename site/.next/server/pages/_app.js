/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/AuthContext.tsx":
/*!*************************************!*\
  !*** ./src/context/AuthContext.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n  user: null,\n  login: () => {},\n  logout: () => {}\n});\nconst AuthProvider = ({\n  children\n}) => {\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const login = () => setUser({\n    name: 'Guest'\n  });\n  const logout = () => setUser(null);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AuthContext.Provider, {\n    value: {\n      user,\n      login,\n      logout\n    }\n  }, children);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9BdXRoQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRTtBQVEzRCxNQUFNRyxXQUFXLGdCQUFHRixvREFBYSxDQUFrQjtFQUN4REcsSUFBSSxFQUFFLElBQUk7RUFDVkMsS0FBSyxFQUFFQSxDQUFBLEtBQU0sQ0FBQyxDQUFDO0VBQ2ZDLE1BQU0sRUFBRUEsQ0FBQSxLQUFNLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBRUYsTUFBTUMsWUFBK0MsR0FBR0EsQ0FBQztFQUFFQztBQUFTLENBQUMsS0FBSztFQUN4RSxNQUFNLENBQUNKLElBQUksRUFBRUssT0FBTyxDQUFDLEdBQUdQLCtDQUFRLENBQU0sSUFBSSxDQUFDO0VBQzNDLE1BQU1HLEtBQUssR0FBR0EsQ0FBQSxLQUFNSSxPQUFPLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQVEsQ0FBQyxDQUFDO0VBQzlDLE1BQU1KLE1BQU0sR0FBR0EsQ0FBQSxLQUFNRyxPQUFPLENBQUMsSUFBSSxDQUFDO0VBRWxDLG9CQUNFVCwwREFBQSxDQUFDRyxXQUFXLENBQUNTLFFBQVE7SUFBQ0MsS0FBSyxFQUFFO01BQUVULElBQUk7TUFBRUMsS0FBSztNQUFFQztJQUFPO0VBQUUsR0FDbERFLFFBQ21CLENBQUM7QUFFM0IsQ0FBQztBQUVELGlFQUFlRCxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc2VwaG9uZS1nYXJkZW4td2Vic2l0ZS8uL3NyYy9jb250ZXh0L0F1dGhDb250ZXh0LnRzeD82ZWU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgQXV0aENvbnRleHRUeXBlIHtcbiAgdXNlcjogYW55O1xuICBsb2dpbjogKCkgPT4gdm9pZDtcbiAgbG9nb3V0OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhDb250ZXh0VHlwZT4oe1xuICB1c2VyOiBudWxsLFxuICBsb2dpbjogKCkgPT4ge30sXG4gIGxvZ291dDogKCkgPT4ge30sXG59KTtcblxuY29uc3QgQXV0aFByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG4gIGNvbnN0IGxvZ2luID0gKCkgPT4gc2V0VXNlcih7IG5hbWU6ICdHdWVzdCcgfSk7XG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHNldFVzZXIobnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW4sIGxvZ291dCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aFByb3ZpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiQXV0aENvbnRleHQiLCJ1c2VyIiwibG9naW4iLCJsb2dvdXQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldFVzZXIiLCJuYW1lIiwiY3JlYXRlRWxlbWVudCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const ComponentWithProps = Component;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ComponentWithProps, pageProps));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.appWithTranslation)(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFFbUI7QUFDQTtBQUN4QjtBQUUxQixTQUFTRyxLQUFLQSxDQUFDO0VBQUVDLFNBQVM7RUFBRUM7QUFBb0IsQ0FBQyxFQUFFO0VBQ2pELE1BQU1DLGtCQUFrQixHQUFHRixTQUFxQztFQUNoRSxvQkFDRUYsMERBQUEsQ0FBQ0QsNERBQVkscUJBQ1hDLDBEQUFBLENBQUNJLGtCQUFrQixFQUFLRCxTQUFZLENBQ3hCLENBQUM7QUFFbkI7QUFFQSxpRUFBZUwsZ0VBQWtCLENBQUNHLEtBQUssQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNlcGhvbmUtZ2FyZGVuLXdlYnNpdGUvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgYXBwV2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnbmV4dC1pMThuZXh0JztcbmltcG9ydCBBdXRoUHJvdmlkZXIgZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IENvbXBvbmVudFdpdGhQcm9wcyA9IENvbXBvbmVudCBhcyBSZWFjdC5Db21wb25lbnRUeXBlPGFueT47XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnRXaXRoUHJvcHMgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwV2l0aFRyYW5zbGF0aW9uKE15QXBwKTtcbiJdLCJuYW1lcyI6WyJhcHBXaXRoVHJhbnNsYXRpb24iLCJBdXRoUHJvdmlkZXIiLCJSZWFjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiQ29tcG9uZW50V2l0aFByb3BzIiwiY3JlYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();