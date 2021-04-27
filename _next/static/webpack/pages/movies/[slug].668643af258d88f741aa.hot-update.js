webpackHotUpdate_N_E("pages/movies/[slug]",{

/***/ "./pages/movies/[slug].js":
/*!********************************!*\
  !*** ./pages/movies/[slug].js ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MovieDetail; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/container */ \"./components/container.js\");\n/* harmony import */ var _components_post_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/post-body */ \"./components/post-body.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/header */ \"./components/header.js\");\n/* harmony import */ var _components_movie_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/movie-header */ \"./components/movie-header.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_section_separator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/section-separator */ \"./components/section-separator.js\");\n/* harmony import */ var _components_post_title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/post-title */ \"./components/post-title.js\");\n/* harmony import */ var _components_nav_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/nav-bar */ \"./components/nav-bar.js\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/constants */ \"./lib/constants.js\");\n\n\n\nvar _jsxFileName = \"/Users/wenzhili/web/next-projects/next-wordpress-movie/pages/movies/[slug].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction MovieDetail(_ref) {\n  _s();\n\n  var _post$movieAcfGroup, _post$movieAcfGroup$c, _post$movieAcfGroup2, _post$author, _post$movieAcfGroup3, _post$movieAcfGroup4;\n\n  var post = _ref.post;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  if (!(post !== null && post !== void 0 && post.slug)) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_error__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      statusCode: 404\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_nav_bar__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        activePage: \"/movies\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), router.isFallback ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_post_title__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        children: \"Loading\\u2026\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n          className: \"my-20\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n              children: [post.title, \" | Next.js Blog Example with \", _lib_constants__WEBPACK_IMPORTED_MODULE_12__[\"CMS_NAME\"]]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n              property: \"og:image\",\n              content: (_post$movieAcfGroup = post.movieAcfGroup) === null || _post$movieAcfGroup === void 0 ? void 0 : (_post$movieAcfGroup$c = _post$movieAcfGroup.cover) === null || _post$movieAcfGroup$c === void 0 ? void 0 : _post$movieAcfGroup$c.sourceUrl\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_movie_header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            title: post.title,\n            coverImage: (_post$movieAcfGroup2 = post.movieAcfGroup) === null || _post$movieAcfGroup2 === void 0 ? void 0 : _post$movieAcfGroup2.cover,\n            date: post.date,\n            author: (_post$author = post.author) === null || _post$author === void 0 ? void 0 : _post$author.node,\n            director: (_post$movieAcfGroup3 = post.movieAcfGroup) === null || _post$movieAcfGroup3 === void 0 ? void 0 : _post$movieAcfGroup3.director,\n            producer: (_post$movieAcfGroup4 = post.movieAcfGroup) === null || _post$movieAcfGroup4 === void 0 ? void 0 : _post$movieAcfGroup4.producer\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_section_separator__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_post_body__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            content: post.movieAcfGroup.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }, this)\n      }, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MovieDetail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = MovieDetail;\n\nvar _c;\n\n$RefreshReg$(_c, \"MovieDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzL1tzbHVnXS5qcz9lMWUwIl0sIm5hbWVzIjpbIk1vdmllRGV0YWlsIiwicG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsInNsdWciLCJpc0ZhbGxiYWNrIiwidGl0bGUiLCJDTVNfTkFNRSIsIm1vdmllQWNmR3JvdXAiLCJjb3ZlciIsInNvdXJjZVVybCIsImRhdGUiLCJhdXRob3IiLCJub2RlIiwiZGlyZWN0b3IiLCJwcm9kdWNlciIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJZSxTQUFTQSxXQUFULE9BQWdDO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsSUFBUyxRQUFUQSxJQUFTO0FBQzdDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBSSxFQUFDRixJQUFELGFBQUNBLElBQUQsZUFBQ0EsSUFBSSxDQUFFRyxJQUFQLENBQUosRUFBaUI7QUFDZix3QkFBTyxxRUFBQyxpREFBRDtBQUFXLGdCQUFVLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSwyQkFDRSxxRUFBQyw2REFBRDtBQUFBLDhCQUNFLHFFQUFDLDREQUFEO0FBQVEsa0JBQVUsRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR0YsTUFBTSxDQUFDRyxVQUFQLGdCQUNDLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZ0JBR0M7QUFBQSwrQkFDRTtBQUFTLG1CQUFTLEVBQUMsT0FBbkI7QUFBQSxrQ0FDRSxxRUFBQyxnREFBRDtBQUFBLG9DQUNFO0FBQUEseUJBQ0dKLElBQUksQ0FBQ0ssS0FEUixtQ0FDNENDLHdEQUQ1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRTtBQUNFLHNCQUFRLEVBQUMsVUFEWDtBQUVFLHFCQUFPLHlCQUFFTixJQUFJLENBQUNPLGFBQVAsaUZBQUUsb0JBQW9CQyxLQUF0QiwwREFBRSxzQkFBMkJDO0FBRnRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBVUUscUVBQUMsZ0VBQUQ7QUFDRSxpQkFBSyxFQUFFVCxJQUFJLENBQUNLLEtBRGQ7QUFFRSxzQkFBVSwwQkFBRUwsSUFBSSxDQUFDTyxhQUFQLHlEQUFFLHFCQUFvQkMsS0FGbEM7QUFHRSxnQkFBSSxFQUFFUixJQUFJLENBQUNVLElBSGI7QUFJRSxrQkFBTSxrQkFBRVYsSUFBSSxDQUFDVyxNQUFQLGlEQUFFLGFBQWFDLElBSnZCO0FBS0Usb0JBQVEsMEJBQUVaLElBQUksQ0FBQ08sYUFBUCx5REFBRSxxQkFBb0JNLFFBTGhDO0FBTUUsb0JBQVEsMEJBQUViLElBQUksQ0FBQ08sYUFBUCx5REFBRSxxQkFBb0JPO0FBTmhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkYsZUFrQkUscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsQkYsZUFtQkUscUVBQUMsNkRBQUQ7QUFBVSxtQkFBTyxFQUFFZCxJQUFJLENBQUNPLGFBQUwsQ0FBbUJRO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHVCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtDRDs7R0F6Q3VCaEIsVztVQUNQRyxxRDs7O0tBRE9ILFciLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IFBvc3RCb2R5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdC1ib2R5J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBNb3ZpZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vdmllLWhlYWRlcidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgU2VjdGlvblNlcGFyYXRvciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NlY3Rpb24tc2VwYXJhdG9yJ1xuaW1wb3J0IFBvc3RUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3QtdGl0bGUnXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbmF2LWJhcidcbmltcG9ydCB7IENNU19OQU1FIH0gZnJvbSAnLi4vLi4vbGliL2NvbnN0YW50cydcbmltcG9ydCB7IGdldEFsbE1vdmllc1dpdGhTbHVnLCBnZXRNb3ZpZUJ5IH0gZnJvbSAnLi4vLi4vbGliL3NlcnZpY2UnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVEZXRhaWwoeyBwb3N0LCB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgaWYgKCFwb3N0Py5zbHVnKSB7XG4gICAgcmV0dXJuIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZT17NDA0fSAvPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPE5hdkJhciBhY3RpdmVQYWdlPVwiL21vdmllc1wiIC8+XG4gICAgICAgIHtyb3V0ZXIuaXNGYWxsYmFjayA/IChcbiAgICAgICAgICA8UG9zdFRpdGxlPkxvYWRpbmfigKY8L1Bvc3RUaXRsZT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibXktMjBcIj5cbiAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9IHwgTmV4dC5qcyBCbG9nIEV4YW1wbGUgd2l0aCB7Q01TX05BTUV9XG4gICAgICAgICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtwb3N0Lm1vdmllQWNmR3JvdXA/LmNvdmVyPy5zb3VyY2VVcmx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICA8TW92aWVIZWFkZXJcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICBjb3ZlckltYWdlPXtwb3N0Lm1vdmllQWNmR3JvdXA/LmNvdmVyfVxuICAgICAgICAgICAgICAgIGRhdGU9e3Bvc3QuZGF0ZX1cbiAgICAgICAgICAgICAgICBhdXRob3I9e3Bvc3QuYXV0aG9yPy5ub2RlfVxuICAgICAgICAgICAgICAgIGRpcmVjdG9yPXtwb3N0Lm1vdmllQWNmR3JvdXA/LmRpcmVjdG9yfVxuICAgICAgICAgICAgICAgIHByb2R1Y2VyPXtwb3N0Lm1vdmllQWNmR3JvdXA/LnByb2R1Y2VyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8U2VjdGlvblNlcGFyYXRvciAvPlxuICAgICAgICAgICAgICA8UG9zdEJvZHkgY29udGVudD17cG9zdC5tb3ZpZUFjZkdyb3VwLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zLCB9KSB7XG4gXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRNb3ZpZUJ5KHBhcmFtcy5zbHVnKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0IDogZGF0YSxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgYWxsTW92aWVzID0gYXdhaXQgZ2V0QWxsTW92aWVzV2l0aFNsdWcoKVxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBhbGxNb3ZpZXMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies/[slug].js\n");

/***/ })

})