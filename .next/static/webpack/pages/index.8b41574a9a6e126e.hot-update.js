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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\nvar formatDataSet = function(param) {\n    var data = param.data, field = param.field, dimension = param.dimension;\n    var groupedData = lodash__WEBPACK_IMPORTED_MODULE_0___default().groupBy(data, dimension);\n    console.log(groupedData);\n    var labels = Object.keys(groupedData);\n    var fieldmedSets = labels.map(function(label) {\n        return groupedData[label].reduce(function(prev, curr, acc) {\n            console.log(curr);\n            return curr[field] + acc;\n        }, 0);\n    });\n    console.log(fieldmedSets);\n    return {\n        labels: labels,\n        summedSets: summedSets\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (formatDataSet);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2Zvcm1hdERhdGFTZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBRWxDLElBQU1FLGFBQWEsR0FBRyxnQkFBZ0M7UUFBN0JDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsU0FBUyxTQUFUQSxTQUFTO0lBQzVDLElBQU1DLFdBQVcsR0FBR04scURBQVMsQ0FBQ0csSUFBSSxFQUFFRSxTQUFTLENBQUM7SUFDOUNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxXQUFXLENBQUM7SUFDeEIsSUFBTUksTUFBTSxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ04sV0FBVyxDQUFDO0lBQ3ZDLElBQU1PLFlBQVksR0FBR0gsTUFBTSxDQUFDSSxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFLO1FBQzFDLE9BQU9ULFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsR0FBRyxFQUFLO1lBQ2xEWCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDO1lBQ2pCLE9BQU9BLElBQUksQ0FBQ2QsS0FBSyxDQUFDLEdBQUdlLEdBQUcsQ0FBQztRQUM3QixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBQ0ZYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxZQUFZLENBQUUsQ0FBQztJQUMzQixPQUFPO1FBQUVILE1BQU0sRUFBTkEsTUFBTTtRQUFFVSxVQUFVLEVBQVZBLFVBQVU7S0FBRTtBQUNoQyxDQUFDO0FBQ0QsK0RBQWVsQixhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9mb3JtYXREYXRhU2V0LmpzPzBjNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8sIHsgc2l6ZSB9ICBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBmb3JtYXREYXRhU2V0ID0gKHsgZGF0YSwgZmllbGQsIGRpbWVuc2lvbiB9KSA9PiB7XG4gICBjb25zdCBncm91cGVkRGF0YSA9IF8uZ3JvdXBCeShkYXRhLCBkaW1lbnNpb24pO1xuICAgY29uc29sZS5sb2coZ3JvdXBlZERhdGEpXG4gICBjb25zdCBsYWJlbHMgPSBPYmplY3Qua2V5cyhncm91cGVkRGF0YSlcbiAgIGNvbnN0IGZpZWxkbWVkU2V0cyA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgcmV0dXJuIGdyb3VwZWREYXRhW2xhYmVsXS5yZWR1Y2UoKHByZXYsIGN1cnIsIGFjYykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyKVxuICAgICAgICByZXR1cm4gY3VycltmaWVsZF0gKyBhY2M7XG4gICAgfSwgMClcbiAgIH0pXG4gICBjb25zb2xlLmxvZyhmaWVsZG1lZFNldHMgKTtcbiAgIHJldHVybiB7IGxhYmVscywgc3VtbWVkU2V0cyB9XG59XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREYXRhU2V0OyJdLCJuYW1lcyI6WyJfIiwic2l6ZSIsImZvcm1hdERhdGFTZXQiLCJkYXRhIiwiZmllbGQiLCJkaW1lbnNpb24iLCJncm91cGVkRGF0YSIsImdyb3VwQnkiLCJjb25zb2xlIiwibG9nIiwibGFiZWxzIiwiT2JqZWN0Iiwia2V5cyIsImZpZWxkbWVkU2V0cyIsIm1hcCIsImxhYmVsIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJhY2MiLCJzdW1tZWRTZXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/formatDataSet.js\n"));

/***/ })

});