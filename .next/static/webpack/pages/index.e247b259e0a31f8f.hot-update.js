"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./modules/formatDataSet.js":
/*!**********************************!*\
  !*** ./modules/formatDataSet.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nvar formatDataSet = function(param) {\n    var data = param.data;\n    var type = \"bar\";\n    var grouping = \"state\";\n    var sum = \"price\";\n    var groupedData = lodash__WEBPACK_IMPORTED_MODULE_0___default().groupBy(data, grouping);\n    var labels = Object.keys(groupedData);\n    var summedSets = groupedData.map(function(set) {\n        return set.reduce(function(prev, curr, acc) {\n            return curr + acc;\n        }, 0);\n    });\n    console.log(summedSets);\n    return {\n        labels: labels,\n        summedSets: summedSets\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (formatDataSet);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2Zvcm1hdERhdGFTZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdCO0FBRXhCLElBQU1DLGFBQWEsR0FBRyxnQkFBYztRQUFYQyxJQUFJLFNBQUpBLElBQUk7SUFDMUIsSUFBTUMsSUFBSSxHQUFHLEtBQUs7SUFDbEIsSUFBTUMsUUFBUSxHQUFHLE9BQU87SUFDeEIsSUFBTUMsR0FBRyxHQUFHLE9BQU87SUFDbkIsSUFBTUMsV0FBVyxHQUFHTixxREFBUyxDQUFDRSxJQUFJLEVBQUVFLFFBQVEsQ0FBQztJQUM3QyxJQUFNSSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSixXQUFXLENBQUM7SUFDdkMsSUFBTUssVUFBVSxHQUFHTCxXQUFXLENBQUNNLEdBQUcsQ0FBQyxTQUFDQyxHQUFHLEVBQUs7UUFDM0MsT0FBT0EsR0FBRyxDQUFDQyxNQUFNLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEdBQUcsRUFBSztZQUNuQyxPQUFPRCxJQUFJLEdBQUdDLEdBQUcsQ0FBQztRQUN0QixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixVQUFVLENBQUUsQ0FBQztJQUN6QixPQUFPO1FBQUVILE1BQU0sRUFBTkEsTUFBTTtRQUFFRyxVQUFVLEVBQVZBLFVBQVU7S0FBRTtBQUNoQyxDQUFDO0FBQ0QsK0RBQWVWLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9tb2R1bGVzL2Zvcm1hdERhdGFTZXQuanM/MGM1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyAgZnJvbSAnbG9kYXNoJztcblxuY29uc3QgZm9ybWF0RGF0YVNldCA9ICh7IGRhdGEgfSkgPT4ge1xuICAgY29uc3QgdHlwZSA9ICdiYXInO1xuICAgY29uc3QgZ3JvdXBpbmcgPSAnc3RhdGUnO1xuICAgY29uc3Qgc3VtID0gJ3ByaWNlJztcbiAgIGNvbnN0IGdyb3VwZWREYXRhID0gXy5ncm91cEJ5KGRhdGEsIGdyb3VwaW5nKTtcbiAgIGNvbnN0IGxhYmVscyA9IE9iamVjdC5rZXlzKGdyb3VwZWREYXRhKVxuICAgY29uc3Qgc3VtbWVkU2V0cyA9IGdyb3VwZWREYXRhLm1hcCgoc2V0KSA9PiB7XG4gICAgcmV0dXJuIHNldC5yZWR1Y2UoKHByZXYsIGN1cnIsIGFjYykgPT4ge1xuICAgICAgICByZXR1cm4gY3VyciArIGFjYztcbiAgICB9LCAwKVxuICAgfSlcbiAgIGNvbnNvbGUubG9nKHN1bW1lZFNldHMgKTtcbiAgIHJldHVybiB7IGxhYmVscywgc3VtbWVkU2V0cyB9XG59XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREYXRhU2V0OyJdLCJuYW1lcyI6WyJfIiwiZm9ybWF0RGF0YVNldCIsImRhdGEiLCJ0eXBlIiwiZ3JvdXBpbmciLCJzdW0iLCJncm91cGVkRGF0YSIsImdyb3VwQnkiLCJsYWJlbHMiLCJPYmplY3QiLCJrZXlzIiwic3VtbWVkU2V0cyIsIm1hcCIsInNldCIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiYWNjIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/formatDataSet.js\n"));

/***/ })

});