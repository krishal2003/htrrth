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

/***/ "./src/sections/_examples/extra/carousel/SponsorCarousel.tsx":
/*!*******************************************************************!*\
  !*** ./src/sections/_examples/extra/carousel/SponsorCarousel.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarouselAnimation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _utils_cssStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/cssStyles */ \"./src/utils/cssStyles.ts\");\n/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/image */ \"./src/components/image/index.ts\");\n/* harmony import */ var _components_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/animate */ \"./src/components/animate/index.ts\");\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/carousel */ \"./src/components/carousel/index.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n// @mui\n\n\n// utils\n\n// components\n\n\n\nfunction CarouselAnimation(param) {\n    let { data  } = param;\n    _s();\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme)();\n    const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(theme.direction === \"rtl\" ? data.length - 1 : 0);\n    const carouselSettings = {\n        speed: 800,\n        dots: false,\n        arrows: false,\n        autoplay: true,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        rtl: Boolean(theme.direction === \"rtl\"),\n        beforeChange: (current, next)=>setCurrentIndex(next)\n    };\n    const handlePrev = ()=>{\n        var _carouselRef_current;\n        (_carouselRef_current = carouselRef.current) === null || _carouselRef_current === void 0 ? void 0 : _carouselRef_current.slickPrev();\n    };\n    const handleNext = ()=>{\n        var _carouselRef_current;\n        (_carouselRef_current = carouselRef.current) === null || _carouselRef_current === void 0 ? void 0 : _carouselRef_current.slickNext();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Card, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                ref: carouselRef,\n                ...carouselSettings,\n                children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CarouselItem, {\n                        item: item,\n                        isActive: index === currentIndex\n                    }, item.id, false, {\n                        fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carousel__WEBPACK_IMPORTED_MODULE_5__.CarouselArrowIndex, {\n                index: currentIndex,\n                total: data.length,\n                onNext: handleNext,\n                onPrevious: handlePrev\n            }, void 0, false, {\n                fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(CarouselAnimation, \"cWbXfH7KYBuUlSR/g2ZuxFWPi/8=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme\n    ];\n});\n_c = CarouselAnimation;\nfunction CarouselItem(param) {\n    let { item , isActive  } = param;\n    _s1();\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme)();\n    const { image , title  } = item;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Paper, {\n        sx: {\n            position: \"relative\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                alt: title,\n                src: image,\n                ratio: \"16/9\"\n            }, void 0, false, {\n                fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                sx: {\n                    top: 0,\n                    width: 1,\n                    height: 1,\n                    position: \"absolute\",\n                    ...(0,_utils_cssStyles__WEBPACK_IMPORTED_MODULE_2__.bgGradient)({\n                        direction: \"to top\",\n                        startColor: \"\".concat(theme.palette.grey[900], \" 0%\"),\n                        endColor: \"\".concat((0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.alpha)(theme.palette.grey[900], 0), \" 100%\")\n                    })\n                }\n            }, void 0, false, {\n                fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardContent, {\n                component: _components_animate__WEBPACK_IMPORTED_MODULE_4__.MotionContainer,\n                animate: isActive,\n                action: true,\n                sx: {\n                    bottom: 0,\n                    width: 1,\n                    maxWidth: 720,\n                    textAlign: \"left\",\n                    position: \"absolute\",\n                    color: \"common.white\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.m.div, {\n                        variants: (0,_components_animate__WEBPACK_IMPORTED_MODULE_4__.varFade)().inRight,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                            variant: \"h3\",\n                            gutterBottom: true,\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.m.div, {\n                        variants: (0,_components_animate__WEBPACK_IMPORTED_MODULE_4__.varFade)().inRight,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                            variant: \"body2\",\n                            noWrap: true,\n                            gutterBottom: true,\n                            children: item.description\n                        }, void 0, false, {\n                            fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.m.div, {\n                        variants: (0,_components_animate__WEBPACK_IMPORTED_MODULE_4__.varFade)().inRight,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            variant: \"contained\",\n                            sx: {\n                                mt: 3\n                            },\n                            children: \"View More\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s1(CarouselItem, \"VrMvFCCB9Haniz3VCRPNUiCauHs=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme\n    ];\n});\n_c1 = CarouselItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"CarouselAnimation\");\n$RefreshReg$(_c1, \"CarouselItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvX2V4YW1wbGVzL2V4dHJhL2Nhcm91c2VsL1Nwb25zb3JDYXJvdXNlbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDTztBQUN6QyxPQUFPO0FBQ2dEO0FBQzJCO0FBQ2xGLFFBQVE7QUFDaUQ7QUFDekQsYUFBYTtBQUNvQztBQUN5QjtBQUNLO0FBYWhFLFNBQVNpQixrQkFBa0IsS0FBZSxFQUFFO1FBQWpCLEVBQUVDLEtBQUksRUFBUyxHQUFmOztJQUN4QyxNQUFNQyxRQUFRZiw4REFBUUE7SUFFdEIsTUFBTWdCLGNBQWNsQiw2Q0FBTUEsQ0FBa0IsSUFBSTtJQUVoRCxNQUFNLENBQUNtQixjQUFjQyxnQkFBZ0IsR0FBR3JCLCtDQUFRQSxDQUFDa0IsTUFBTUksU0FBUyxLQUFLLFFBQVFMLEtBQUtNLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFFaEcsTUFBTUMsbUJBQW1CO1FBQ3ZCQyxPQUFPO1FBQ1BDLE1BQU0sS0FBSztRQUNYQyxRQUFRLEtBQUs7UUFDYkMsVUFBVSxJQUFJO1FBQ2RDLGNBQWM7UUFDZEMsZ0JBQWdCO1FBQ2hCQyxLQUFLQyxRQUFRZCxNQUFNSSxTQUFTLEtBQUs7UUFDakNXLGNBQWMsQ0FBQ0MsU0FBaUJDLE9BQWlCZCxnQkFBZ0JjO0lBQ25FO0lBRUEsTUFBTUMsYUFBYSxJQUFNO1lBQ3ZCakI7UUFBQUEsQ0FBQUEsdUJBQUFBLFlBQVllLE9BQU8sY0FBbkJmLGtDQUFBQSxLQUFBQSxJQUFBQSxxQkFBcUJrQjtJQUN2QjtJQUVBLE1BQU1DLGFBQWEsSUFBTTtZQUN2Qm5CO1FBQUFBLENBQUFBLHVCQUFBQSxZQUFZZSxPQUFPLGNBQW5CZixrQ0FBQUEsS0FBQUEsSUFBQUEscUJBQXFCb0I7SUFDdkI7SUFFQSxxQkFDRSw4REFBQ2xDLCtDQUFJQTs7MEJBQ0gsOERBQUNTLDREQUFRQTtnQkFBQzBCLEtBQUtyQjtnQkFBYyxHQUFHSyxnQkFBZ0I7MEJBQzdDUCxLQUFLd0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNmLDhEQUFDQzt3QkFBMkJGLE1BQU1BO3dCQUFNRyxVQUFVRixVQUFVdkI7dUJBQXpDc0IsS0FBS0ksRUFBRTs7Ozs7Ozs7OzswQkFJOUIsOERBQUMvQixvRUFBa0JBO2dCQUNqQjRCLE9BQU92QjtnQkFDUDJCLE9BQU85QixLQUFLTSxNQUFNO2dCQUNsQnlCLFFBQVFWO2dCQUNSVyxZQUFZYjs7Ozs7Ozs7Ozs7O0FBSXBCLENBQUM7R0ExQ3VCcEI7O1FBQ1JiLDBEQUFRQTs7O0tBREFhO0FBdUR4QixTQUFTNEIsYUFBYSxLQUFxQyxFQUFFO1FBQXZDLEVBQUVGLEtBQUksRUFBRUcsU0FBUSxFQUFxQixHQUFyQzs7SUFDcEIsTUFBTTNCLFFBQVFmLDhEQUFRQTtJQUV0QixNQUFNLEVBQUUrQyxNQUFLLEVBQUVDLE1BQUssRUFBRSxHQUFHVDtJQUV6QixxQkFDRSw4REFBQ3BDLGdEQUFLQTtRQUFDOEMsSUFBSTtZQUFFQyxVQUFVO1FBQVc7OzBCQUNoQyw4REFBQzFDLHlEQUFLQTtnQkFBQzJDLEtBQUtIO2dCQUFPSSxLQUFLTDtnQkFBT00sT0FBTTs7Ozs7OzBCQUVyQyw4REFBQ3BELDhDQUFHQTtnQkFDRmdELElBQUk7b0JBQ0ZLLEtBQUs7b0JBQ0xDLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JOLFVBQVU7b0JBQ1YsR0FBRzNDLDREQUFVQSxDQUFDO3dCQUNaWSxXQUFXO3dCQUNYc0MsWUFBWSxHQUEyQixPQUF4QjFDLE1BQU0yQyxPQUFPLENBQUNDLElBQUksQ0FBQyxJQUFJLEVBQUM7d0JBQ3ZDQyxVQUFVLEdBQXFDLE9BQWxDN0QsMkRBQUtBLENBQUNnQixNQUFNMkMsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUc7b0JBQ2pELEVBQUU7Z0JBQ0o7Ozs7OzswQkFHRiw4REFBQ3JELHNEQUFXQTtnQkFDVnVELFdBQVdwRCxnRUFBZUE7Z0JBQzFCcUQsU0FBU3BCO2dCQUNUcUIsTUFBTTtnQkFDTmQsSUFBSTtvQkFDRmUsUUFBUTtvQkFDUlQsT0FBTztvQkFDUFUsVUFBVTtvQkFDVkMsV0FBVztvQkFDWGhCLFVBQVU7b0JBQ1ZpQixPQUFPO2dCQUNUOztrQ0FFQSw4REFBQ3ZFLGdEQUFLO3dCQUFDeUUsVUFBVTNELDREQUFPQSxHQUFHNEQsT0FBTztrQ0FDaEMsNEVBQUNqRSxxREFBVUE7NEJBQUNrRSxTQUFROzRCQUFLQyxZQUFZO3NDQUNsQ2pDLEtBQUtTLEtBQUs7Ozs7Ozs7Ozs7O2tDQUlmLDhEQUFDcEQsZ0RBQUs7d0JBQUN5RSxVQUFVM0QsNERBQU9BLEdBQUc0RCxPQUFPO2tDQUNoQyw0RUFBQ2pFLHFEQUFVQTs0QkFBQ2tFLFNBQVE7NEJBQVFFLE1BQU07NEJBQUNELFlBQVk7c0NBQzVDakMsS0FBS21DLFdBQVc7Ozs7Ozs7Ozs7O2tDQUlyQiw4REFBQzlFLGdEQUFLO3dCQUFDeUUsVUFBVTNELDREQUFPQSxHQUFHNEQsT0FBTztrQ0FDaEMsNEVBQUNsRSxpREFBTUE7NEJBQUNtRSxTQUFROzRCQUFZdEIsSUFBSTtnQ0FBRTBCLElBQUk7NEJBQUU7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JEO0lBeERTbEM7O1FBQ096QywwREFBUUE7OztNQURmeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL19leGFtcGxlcy9leHRyYS9jYXJvdXNlbC9TcG9uc29yQ2Fyb3VzZWwudHN4P2QwMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG4vLyBAbXVpXHJcbmltcG9ydCB7IGFscGhhLCB1c2VUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IHsgQm94LCBDYXJkLCBQYXBlciwgQnV0dG9uLCBUeXBvZ3JhcGh5LCBDYXJkQ29udGVudCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG4vLyB1dGlsc1xyXG5pbXBvcnQgeyBiZ0dyYWRpZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvY3NzU3R5bGVzJztcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9pbWFnZSc7XHJcbmltcG9ydCB7IE1vdGlvbkNvbnRhaW5lciwgdmFyRmFkZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYW5pbWF0ZSc7XHJcbmltcG9ydCBDYXJvdXNlbCwgeyBDYXJvdXNlbEFycm93SW5kZXggfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2Nhcm91c2VsJztcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgZGF0YToge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICB9W107XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbEFuaW1hdGlvbih7IGRhdGEgfTogUHJvcHMpIHtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmPENhcm91c2VsIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSh0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gZGF0YS5sZW5ndGggLSAxIDogMCk7XHJcblxyXG4gIGNvbnN0IGNhcm91c2VsU2V0dGluZ3MgPSB7XHJcbiAgICBzcGVlZDogODAwLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIHJ0bDogQm9vbGVhbih0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnKSxcclxuICAgIGJlZm9yZUNoYW5nZTogKGN1cnJlbnQ6IG51bWJlciwgbmV4dDogbnVtYmVyKSA9PiBzZXRDdXJyZW50SW5kZXgobmV4dCksXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJldiA9ICgpID0+IHtcclxuICAgIGNhcm91c2VsUmVmLmN1cnJlbnQ/LnNsaWNrUHJldigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICBjYXJvdXNlbFJlZi5jdXJyZW50Py5zbGlja05leHQoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxDYXJvdXNlbCByZWY9e2Nhcm91c2VsUmVmfSB7Li4uY2Fyb3VzZWxTZXR0aW5nc30+XHJcbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENhcm91c2VsSXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IGlzQWN0aXZlPXtpbmRleCA9PT0gY3VycmVudEluZGV4fSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG5cclxuICAgICAgPENhcm91c2VsQXJyb3dJbmRleFxyXG4gICAgICAgIGluZGV4PXtjdXJyZW50SW5kZXh9XHJcbiAgICAgICAgdG90YWw9e2RhdGEubGVuZ3RofVxyXG4gICAgICAgIG9uTmV4dD17aGFuZGxlTmV4dH1cclxuICAgICAgICBvblByZXZpb3VzPXtoYW5kbGVQcmV2fVxyXG4gICAgICAvPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbnR5cGUgQ2Fyb3VzZWxJdGVtUHJvcHMgPSB7XHJcbiAgaXRlbToge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG4gIH07XHJcbiAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbn07XHJcblxyXG5mdW5jdGlvbiBDYXJvdXNlbEl0ZW0oeyBpdGVtLCBpc0FjdGl2ZSB9OiBDYXJvdXNlbEl0ZW1Qcm9wcykge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgY29uc3QgeyBpbWFnZSwgdGl0bGUgfSA9IGl0ZW07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXIgc3g9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgIDxJbWFnZSBhbHQ9e3RpdGxlfSBzcmM9e2ltYWdlfSByYXRpbz1cIjE2LzlcIiAvPlxyXG5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgIGhlaWdodDogMSxcclxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgLi4uYmdHcmFkaWVudCh7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3RvIHRvcCcsXHJcbiAgICAgICAgICAgIHN0YXJ0Q29sb3I6IGAke3RoZW1lLnBhbGV0dGUuZ3JleVs5MDBdfSAwJWAsXHJcbiAgICAgICAgICAgIGVuZENvbG9yOiBgJHthbHBoYSh0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSwgMCl9IDEwMCVgLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxDYXJkQ29udGVudFxyXG4gICAgICAgIGNvbXBvbmVudD17TW90aW9uQ29udGFpbmVyfVxyXG4gICAgICAgIGFuaW1hdGU9e2lzQWN0aXZlfVxyXG4gICAgICAgIGFjdGlvblxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgIG1heFdpZHRoOiA3MjAsXHJcbiAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgY29sb3I6ICdjb21tb24ud2hpdGUnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8bS5kaXYgdmFyaWFudHM9e3ZhckZhZGUoKS5pblJpZ2h0fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9tLmRpdj5cclxuXHJcbiAgICAgICAgPG0uZGl2IHZhcmlhbnRzPXt2YXJGYWRlKCkuaW5SaWdodH0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBub1dyYXAgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L20uZGl2PlxyXG5cclxuICAgICAgICA8bS5kaXYgdmFyaWFudHM9e3ZhckZhZGUoKS5pblJpZ2h0fT5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN4PXt7IG10OiAzIH19PlxyXG4gICAgICAgICAgICBWaWV3IE1vcmVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvbS5kaXY+XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICA8L1BhcGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIm0iLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImFscGhhIiwidXNlVGhlbWUiLCJCb3giLCJDYXJkIiwiUGFwZXIiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiQ2FyZENvbnRlbnQiLCJiZ0dyYWRpZW50IiwiSW1hZ2UiLCJNb3Rpb25Db250YWluZXIiLCJ2YXJGYWRlIiwiQ2Fyb3VzZWwiLCJDYXJvdXNlbEFycm93SW5kZXgiLCJDYXJvdXNlbEFuaW1hdGlvbiIsImRhdGEiLCJ0aGVtZSIsImNhcm91c2VsUmVmIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiZGlyZWN0aW9uIiwibGVuZ3RoIiwiY2Fyb3VzZWxTZXR0aW5ncyIsInNwZWVkIiwiZG90cyIsImFycm93cyIsImF1dG9wbGF5Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJydGwiLCJCb29sZWFuIiwiYmVmb3JlQ2hhbmdlIiwiY3VycmVudCIsIm5leHQiLCJoYW5kbGVQcmV2Iiwic2xpY2tQcmV2IiwiaGFuZGxlTmV4dCIsInNsaWNrTmV4dCIsInJlZiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkNhcm91c2VsSXRlbSIsImlzQWN0aXZlIiwiaWQiLCJ0b3RhbCIsIm9uTmV4dCIsIm9uUHJldmlvdXMiLCJpbWFnZSIsInRpdGxlIiwic3giLCJwb3NpdGlvbiIsImFsdCIsInNyYyIsInJhdGlvIiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJzdGFydENvbG9yIiwicGFsZXR0ZSIsImdyZXkiLCJlbmRDb2xvciIsImNvbXBvbmVudCIsImFuaW1hdGUiLCJhY3Rpb24iLCJib3R0b20iLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsImNvbG9yIiwiZGl2IiwidmFyaWFudHMiLCJpblJpZ2h0IiwidmFyaWFudCIsImd1dHRlckJvdHRvbSIsIm5vV3JhcCIsImRlc2NyaXB0aW9uIiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/_examples/extra/carousel/SponsorCarousel.tsx\n"));

/***/ })

});