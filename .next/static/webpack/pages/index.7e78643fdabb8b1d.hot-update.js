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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nvar formatDataSet = function(param) {\n    var data = param.data, field = param.field, dimension = param.dimension, measure = param.measure;\n    var groupedData = lodash__WEBPACK_IMPORTED_MODULE_0___default().groupBy(data, dimension);\n    console.log(groupedData);\n    var labels = Object.keys(groupedData);\n    var summedSets = labels.map(function(label) {\n        if (measure === \"sum\") return lodash__WEBPACK_IMPORTED_MODULE_0___default().sumBy(groupedData[label], function(o) {\n            return o[field];\n        });\n        return lodash__WEBPACK_IMPORTED_MODULE_0___default().meanBy(groupedData[label], function(o) {\n            return o[field];\n        });\n    });\n    console.log(summedSets);\n    return {\n        labels: labels,\n        summedSets: summedSets\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (formatDataSet);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2Zvcm1hdERhdGFTZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBRWxDLElBQU1FLGFBQWEsR0FBRyxnQkFBeUM7UUFBdENDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLE9BQU8sU0FBUEEsT0FBTztJQUNyRCxJQUFNQyxXQUFXLEdBQUdQLHFEQUFTLENBQUNHLElBQUksRUFBRUUsU0FBUyxDQUFDO0lBQzlDSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsV0FBVyxDQUFDO0lBQ3hCLElBQU1JLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNOLFdBQVcsQ0FBQztJQUN2QyxJQUFNTyxVQUFVLEdBQUdILE1BQU0sQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDLEtBQUssRUFBSztRQUN4QyxJQUFHVixPQUFPLEtBQUssS0FBSyxFQUFFLE9BQU9OLG1EQUFPLENBQUNPLFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLEVBQUUsU0FBU0UsQ0FBQyxFQUFFO1lBQUUsT0FBT0EsQ0FBQyxDQUFDZCxLQUFLLENBQUMsQ0FBQztRQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLE9BQU9KLG9EQUFRLENBQUNPLFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLEVBQUUsU0FBU0UsQ0FBQyxFQUFFO1lBQUUsT0FBT0EsQ0FBQyxDQUFDZCxLQUFLLENBQUMsQ0FBQztRQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUMsQ0FBQztJQUNGSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksVUFBVSxDQUFFLENBQUM7SUFDekIsT0FBTztRQUFFSCxNQUFNLEVBQU5BLE1BQU07UUFBRUcsVUFBVSxFQUFWQSxVQUFVO0tBQUU7QUFDaEMsQ0FBQztBQUNELCtEQUFlWixhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9mb3JtYXREYXRhU2V0LmpzPzBjNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8sIHsgc2l6ZSB9ICBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBmb3JtYXREYXRhU2V0ID0gKHsgZGF0YSwgZmllbGQsIGRpbWVuc2lvbiwgbWVhc3VyZSB9KSA9PiB7XG4gICBjb25zdCBncm91cGVkRGF0YSA9IF8uZ3JvdXBCeShkYXRhLCBkaW1lbnNpb24pO1xuICAgY29uc29sZS5sb2coZ3JvdXBlZERhdGEpXG4gICBjb25zdCBsYWJlbHMgPSBPYmplY3Qua2V5cyhncm91cGVkRGF0YSlcbiAgIGNvbnN0IHN1bW1lZFNldHMgPSBsYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgIGlmKG1lYXN1cmUgPT09ICdzdW0nKSByZXR1cm4gXy5zdW1CeShncm91cGVkRGF0YVtsYWJlbF0sIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG9bZmllbGRdOyB9KTtcbiAgICByZXR1cm4gXy5tZWFuQnkoZ3JvdXBlZERhdGFbbGFiZWxdLCBmdW5jdGlvbihvKSB7IHJldHVybiBvW2ZpZWxkXTsgfSk7XG4gICB9KVxuICAgY29uc29sZS5sb2coc3VtbWVkU2V0cyApO1xuICAgcmV0dXJuIHsgbGFiZWxzLCBzdW1tZWRTZXRzIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERhdGFTZXQ7Il0sIm5hbWVzIjpbIl8iLCJzaXplIiwiZm9ybWF0RGF0YVNldCIsImRhdGEiLCJmaWVsZCIsImRpbWVuc2lvbiIsIm1lYXN1cmUiLCJncm91cGVkRGF0YSIsImdyb3VwQnkiLCJjb25zb2xlIiwibG9nIiwibGFiZWxzIiwiT2JqZWN0Iiwia2V5cyIsInN1bW1lZFNldHMiLCJtYXAiLCJsYWJlbCIsInN1bUJ5IiwibyIsIm1lYW5CeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/formatDataSet.js\n"));

/***/ })

});