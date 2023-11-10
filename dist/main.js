/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/Teko-VariableFont_wght.ttf */ \"./src/assets/Teko-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: Teko;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\n}\n\n:root {\n  font-size: 62.5%;\n  --color-one: hsl(0, 0%, 0%);\n  --color-two: hsl(0, 0%, 100%);\n  --color-three: hsl(195, 50%, 80%);\n  --color-four: hsl(15, 50%, 70%);\n  --color-five: hsl(85, 50%, 70%);\n  --color-six: hsl(15, 0%, 50%);\n  --color-seven: hsl(15, 0%, 75%);\n  --color-eight: hsl(275, 100%, 25%);\n}\n\n*,\n::before,\n::after {\n  font-family: Teko, Arial, sans-serif, system-ui, 'Segoe UI', Roboto,\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n  font-size: 1.6rem;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  color: var(--color-one);\n}\n\na {\n  color: var(--color-eight);\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  max-width: 2560px;\n  min-height: 100vh;\n  min-height: 100svh;\n  margin: auto;\n  background-color: var(--color-three);\n}\n\nheader {\n  padding: 10px 0px;\n}\n\nh1 {\n  font-size: 3.2rem;\n  text-align: center;\n  text-decoration: underline;\n}\n\nmain {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding: 0px 20px;\n}\n\n.boards {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 50px;\n  height: fit-content;\n}\n\n.board-container {\n  display: grid;\n  gap: 20px;\n}\n\nh2 {\n  font-size: 2.2rem;\n  font-weight: 500;\n  text-align: center;\n}\n\n.boards h2 {\n  border-radius: 10px;\n  box-shadow: 3px 3px 3px var(--color-one);\n  background-color: var(--color-two);\n}\n\n.board {\n  width: 250px;\n  height: 250px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 2px solid var(--color-one);\n  background-color: var(--color-two);\n}\n\n.board.enemy-waters {\n  cursor: crosshair;\n}\n\n.square {\n  border: 1px solid var(--color-one);\n}\n\n.welcome {\n  text-align: center;\n  display: grid;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n  padding: 5px 10px 10px;\n  border: 3px solid var(--color-one);\n  border-radius: 10px;\n  background-color: var(--color-two);\n}\n\nbutton {\n  border: none;\n  outline: none;\n  appearance: none;\n  margin-top: 10px;\n  border: 2px solid var(--color-one);\n  border-radius: 3px;\n  background-color: var(--color-seven);\n}\n\nbutton:hover {\n  cursor: pointer;\n  box-shadow: 1px 1px 1px var(--color-one);\n}\n\nbutton:active {\n  box-shadow: none;\n}\n\n.result {\n  text-align: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n  display: grid;\n  width: 250px;\n  padding: 10px;\n  border: 2px solid var(--color-one);\n  border-radius: 10px;\n  background-color: var(--color-two);\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0.4;\n  background-color: var(--color-one);\n}\n\nfooter {\n  text-align: center;\n  padding: 10px 0px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ \"./src/ships.js\");\n\n\nfunction NewIndicator(ship) {\n  return { ship };\n}\n\nfunction getShip(shipName) {\n  switch (shipName) {\n    case 'carrier':\n      return (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.NewCarrier)();\n    case 'battleship':\n      return (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.NewBattleship)();\n    case 'cruiser':\n      return (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.NewCruiser)();\n    case 'submarine':\n      return (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.NewSubmarine)();\n    case 'destroyer':\n      return (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.NewDestroyer)();\n  }\n}\n\nclass Gameboard {\n  constructor() {\n    this.board = [];\n    for (let i = 0; i < 10; i += 1) {\n      this.board[i] = [];\n      for (let j = 0; j < 10; j += 1) {\n        this.board[i][j] = NewIndicator(null);\n      }\n    }\n    this.ships = [];\n    this.missedAttacks = [];\n    this.succesfulAttacks = [];\n  }\n\n  evaluatePlacement(shipLocation, shipOrientation, shipLength) {\n    let [x, y] = shipLocation;\n    let targetCells = [];\n    let valid = false;\n    switch (shipOrientation) {\n      case 'horizontal':\n        if (y + shipLength > 10) {\n          return { valid, targetCells: null };\n        } else {\n          valid = true;\n          while (shipLength > 0) {\n            if (this.board[x][y].ship) {\n              valid = false;\n              break;\n            }\n            targetCells.push([x, y]);\n            y += 1;\n            shipLength -= 1;\n          }\n          return valid === true\n            ? { valid, targetCells }\n            : { valid, targetCells: null };\n        }\n      case 'vertical':\n        if (x + shipLength > 10) {\n          return { valid, targetCells: null };\n        } else {\n          valid = true;\n          while (shipLength > 0) {\n            if (this.board[x][y].ship) {\n              valid = false;\n              break;\n            }\n            targetCells.push([x, y]);\n            x += 1;\n            shipLength -= 1;\n          }\n          return valid === true\n            ? { valid, targetCells }\n            : { valid, targetCells: null };\n        }\n    }\n  }\n\n  place = (shipLocation, shipName, shipOrientation) => {\n    const ship = getShip(shipName);\n    let shipLength = ship.length;\n    let [x, y] = shipLocation;\n    const evaluation = this.evaluatePlacement(\n      shipLocation,\n      shipOrientation,\n      shipLength,\n    );\n    if (evaluation.valid) {\n      this.ships.push(ship);\n      switch (shipOrientation) {\n        case 'horizontal':\n          while (shipLength > 0) {\n            this.board[x][y] = NewIndicator(ship);\n            y += 1;\n            shipLength -= 1;\n          }\n          break;\n        case 'vertical':\n          while (shipLength > 0) {\n            this.board[x][y] = NewIndicator(ship);\n            x += 1;\n            shipLength -= 1;\n          }\n          break;\n      }\n    }\n  };\n\n  receiveAttack = (location) => {\n    const [x, y] = location;\n    const ship = this.board[x][y].ship;\n    if (ship) {\n      ship.hit();\n      this.succesfulAttacks.push(location);\n    } else {\n      this.missedAttacks.push(location);\n    }\n  };\n\n  allShipsSunk = () => {\n    if (this.ships.length > 0) {\n      return this.ships.every((ship) => ship.isSunk() === true);\n    }\n  };\n\n  getAvailableMoves = () => {\n    const availableMoves = [];\n    this.board.forEach((row, i) =>\n      row.forEach((cell, j) => {\n        const isPreviousMissedAttack = this.missedAttacks.find((attack) => {\n          const [x, y] = attack;\n          return i === x && j === y;\n        });\n        const isPreviousSuccesfulAttack = this.succesfulAttacks.find(\n          (attack) => {\n            const [x, y] = attack;\n            return i === x && j === y;\n          },\n        );\n        if (!(isPreviousMissedAttack || isPreviousSuccesfulAttack)) {\n          availableMoves.push([i, j]);\n        }\n      }),\n    );\n    return availableMoves;\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newGame: () => (/* binding */ newGame),\n/* harmony export */   setGame: () => (/* binding */ setGame)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players.js */ \"./src/players.js\");\n/* harmony import */ var _place_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./place.js */ \"./src/place.js\");\n\n\n\n\n\n\nfunction setGame() {\n  const aiBoard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  const humanBoard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  const ai = new _players_js__WEBPACK_IMPORTED_MODULE_3__.AiPlayer(humanBoard);\n  const human = new _players_js__WEBPACK_IMPORTED_MODULE_3__.HumanPlayer(ai, aiBoard);\n  (0,_place_js__WEBPACK_IMPORTED_MODULE_4__.placeAiShips)(aiBoard);\n  return { ai, human };\n}\n\nfunction newGame() {\n  const players = setGame();\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(players);\n}\n\n// Main program\nnewGame();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/place.js":
/*!**********************!*\
  !*** ./src/place.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allShipsPlaced: () => (/* binding */ allShipsPlaced),\n/* harmony export */   getCurrentShip: () => (/* binding */ getCurrentShip),\n/* harmony export */   getOrientation: () => (/* binding */ getOrientation),\n/* harmony export */   getShipLength: () => (/* binding */ getShipLength),\n/* harmony export */   placeAiShips: () => (/* binding */ placeAiShips),\n/* harmony export */   popShip: () => (/* binding */ popShip),\n/* harmony export */   pushShip: () => (/* binding */ pushShip),\n/* harmony export */   resetShips: () => (/* binding */ resetShips),\n/* harmony export */   toggleOrientation: () => (/* binding */ toggleOrientation)\n/* harmony export */ });\nlet orientation = 'horizontal';\nlet ships = ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier'];\n\nfunction getOrientation() {\n  return orientation;\n}\n\nfunction toggleOrientation() {\n  orientation = orientation === 'horizontal' ? 'vertical' : 'horizontal';\n}\n\nfunction popShip() {\n  return ships.pop();\n}\n\nfunction pushShip(ship) {\n  ships.push(ship);\n}\n\nfunction getShipLength(ship) {\n  switch (ship) {\n    case 'carrier':\n      return 5;\n    case 'battleship':\n      return 4;\n    case 'cruiser':\n      return 3;\n    case 'submarine':\n      return 3;\n    case 'destroyer':\n      return 2;\n  }\n}\n\nfunction getCurrentShip() {\n  return ships[ships.length - 1];\n}\n\nfunction allShipsPlaced() {\n  return ships.length === 0;\n}\n\nfunction resetShips() {\n  ships = ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier'];\n}\n\nfunction placeAiShips(aiBoard) {\n  const ships = ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier'];\n  while (ships.length > 0) {\n    const board = [];\n    aiBoard.board.forEach((row, i) =>\n      row.forEach((cell, j) => board.push([i, j])),\n    );\n    const randomIndex = Math.floor(Math.random() * board.length);\n    const location = board[randomIndex];\n    const randomNumber = Math.floor(Math.random() * 2);\n    const orientation = randomNumber === 0 ? 'horizontal' : 'vertical';\n    const ship = ships.pop();\n    const shipLength = getShipLength(ship);\n    const evaluation = aiBoard.evaluatePlacement(\n      location,\n      orientation,\n      shipLength,\n    );\n    if (evaluation.valid) {\n      aiBoard.place(location, ship, orientation);\n    } else ships.push(ship);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/place.js?");

/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AiPlayer: () => (/* binding */ AiPlayer),\n/* harmony export */   HumanPlayer: () => (/* binding */ HumanPlayer)\n/* harmony export */ });\nclass HumanPlayer {\n  constructor(opponent, opponentBoard) {\n    this.opponent = opponent;\n    this.opponentBoard = opponentBoard;\n  }\n  attack = (location) => {\n    const moves = this.opponentBoard.getAvailableMoves();\n    const isAvailable = moves.find((move) => {\n      const [x, y] = location;\n      const [i, j] = move;\n      return x === i && y === j;\n    });\n    if (isAvailable) {\n      this.opponentBoard.receiveAttack(location);\n      const humanWin = this.opponentBoard.allShipsSunk();\n      if (humanWin) {\n        return { gameWinner: 'human', gameOver: true, moveValid: true };\n      } else {\n        const aiMove = this.opponent.attack();\n        return aiMove;\n      }\n    } else {\n      return { gameWinner: null, gameOver: false, moveValid: false };\n    }\n  };\n}\n\nclass AiPlayer {\n  constructor(opponentBoard) {\n    this.opponentBoard = opponentBoard;\n  }\n  attack = () => {\n    const moves = this.opponentBoard.getAvailableMoves();\n    if (moves.length > 0) {\n      const randomIndex = Math.floor(Math.random() * moves.length);\n      this.opponentBoard.receiveAttack(moves[randomIndex]);\n      const aiWin = this.opponentBoard.allShipsSunk();\n      if (aiWin) {\n        return { gameWinner: 'ai', gameOver: true, moveValid: true };\n      } else {\n        return { gameWinner: null, gameOver: false, moveValid: true };\n      }\n    } else {\n      return { gameWinner: null, gameOver: false, moveValid: false };\n    }\n  };\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/players.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderGame)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _place_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place.js */ \"./src/place.js\");\n\n\n\nfunction renderOverlay() {\n  const overlay = document.createElement('div');\n  overlay.classList.add('overlay');\n  return overlay;\n}\n\nfunction displayResult(gameStatus) {\n  const result = document.createElement('div');\n  result.classList.add('result');\n  const heading = document.createElement('h2');\n  heading.innerText = 'Game Over';\n  const winner = document.createElement('p');\n  winner.innerText =\n    gameStatus.gameWinner === 'human' ? 'You win!' : 'Computer Wins :(';\n  const button = document.createElement('button');\n  button.innerText = 'New Game';\n  button.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_0__.newGame);\n  const array = [heading, winner, button];\n  array.forEach((element) => result.appendChild(element));\n  const overlay = renderOverlay();\n  const body = document.querySelector('body');\n  body.appendChild(overlay);\n  body.appendChild(result);\n}\n\nfunction renderShipBody(ai, square, location) {\n  const [x, y] = location;\n  if (ai.opponentBoard.board[x][y].ship) square.style.backgroundColor = 'grey';\n}\n\nfunction renderAttackedSquares(player, square, location) {\n  const [x, y] = location;\n  player.opponentBoard.missedAttacks.find((attack) => {\n    const [i, j] = attack;\n    if (x === i && j === y) {\n      square.style.backgroundColor = 'hsl(85, 50%, 70%)';\n    }\n  });\n  player.opponentBoard.succesfulAttacks.find((attack) => {\n    const [i, j] = attack;\n    if (x === i && j === y) {\n      square.style.backgroundColor = 'hsl(15, 50%, 70%)';\n    }\n  });\n}\n\nfunction renderHumanBoard(ai) {\n  const boardContainer = document.createElement('div');\n  boardContainer.classList.add('board-container');\n  const heading = document.createElement('h2');\n  heading.innerText = 'Friendly Waters';\n  boardContainer.appendChild(heading);\n  const board = document.createElement('div');\n  board.classList.add('board');\n  ai.opponentBoard.board.forEach((row, i) =>\n    row.forEach((cell, j) => {\n      const square = document.createElement('div');\n      square.classList.add('square');\n      renderShipBody(ai, square, [i, j]);\n      renderAttackedSquares(ai, square, [i, j]);\n      board.appendChild(square);\n    }),\n  );\n  boardContainer.appendChild(board);\n  return boardContainer;\n}\n\nfunction addAttackListener(human, square, [x, y]) {\n  square.addEventListener('click', () => {\n    const gameStatus = human.attack([x, y]);\n    if (gameStatus.moveValid) {\n      const main = document.querySelector('main');\n      main.replaceChildren();\n      const boards = document.createElement('div');\n      boards.classList.add('boards');\n      boards.appendChild(renderHumanBoard(human.opponent));\n      boards.appendChild(renderAiBoard(human));\n      main.appendChild(boards);\n      if (gameStatus.gameOver) displayResult(gameStatus);\n    }\n  });\n}\n\nfunction renderAiBoard(human) {\n  const boardContainer = document.createElement('div');\n  boardContainer.classList.add('board-container');\n  const heading = document.createElement('h2');\n  heading.innerText = 'Enemy Waters';\n  boardContainer.appendChild(heading);\n  const board = document.createElement('div');\n  board.classList.add('board');\n  board.classList.add('enemy-waters');\n  human.opponentBoard.board.forEach((row, i) =>\n    row.forEach((cell, j) => {\n      const square = document.createElement('div');\n      square.classList.add('square');\n      renderAttackedSquares(human, square, [i, j]);\n      addAttackListener(human, square, [i, j]);\n      board.appendChild(square);\n    }),\n  );\n  boardContainer.appendChild(board);\n  return boardContainer;\n}\n\nfunction renderHeader() {\n  const header = document.createElement('header');\n  const heading = document.createElement('h1');\n  heading.innerText = 'Battleship';\n  header.appendChild(heading);\n  return header;\n}\n\nfunction renderMain(players) {\n  const main = document.createElement('main');\n  const boards = document.createElement('div');\n  boards.classList.add('boards');\n  boards.appendChild(renderHumanBoard(players.ai));\n  boards.appendChild(renderAiBoard(players.human));\n  main.appendChild(boards);\n  return main;\n}\n\nfunction renderFooter() {\n  const footer = document.createElement('footer');\n  footer.innerHTML =\n    'Developed by <a href=\"https://github.com/Ngonidzashe-Zvenyika\">Ngonidzashe Zvenyika</a>';\n  return footer;\n}\n\nfunction addMouseoverListener(square, ai, location) {\n  square.addEventListener('mouseover', () => {\n    const ship = (0,_place_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentShip)();\n    const evaluation = ai.opponentBoard.evaluatePlacement(\n      location,\n      (0,_place_js__WEBPACK_IMPORTED_MODULE_1__.getOrientation)(),\n      (0,_place_js__WEBPACK_IMPORTED_MODULE_1__.getShipLength)(ship),\n    );\n    if (evaluation.valid) {\n      const board = [];\n      ai.opponentBoard.board.forEach((row, i) =>\n        row.forEach((cell, j) => board.push([i, j])),\n      );\n      const squares = [...document.querySelectorAll('.welcome .square')];\n      evaluation.targetCells.forEach((cell) => {\n        const [x, y] = cell;\n        const index = board.findIndex((cell) => {\n          const [i, j] = cell;\n          return x === i && y == j;\n        });\n        squares[index].style.backgroundColor = 'hsl(15, 0%, 75%)';\n      });\n    }\n  });\n}\n\nfunction addMouseoutListener(square, ai, location) {\n  square.addEventListener('mouseout', () => {\n    const ship = (0,_place_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentShip)();\n    const evaluation = ai.opponentBoard.evaluatePlacement(\n      location,\n      (0,_place_js__WEBPACK_IMPORTED_MODULE_1__.getOrientation)(),\n      (0,_place_js__WEBPACK_IMPORTED_MODULE_1__.getShipLength)(ship),\n    );\n    if (evaluation.valid) {\n      const board = [];\n      ai.opponentBoard.board.forEach((row, i) =>\n        row.forEach((cell, j) => board.push([i, j])),\n      );\n      const squares = [...document.querySelectorAll('.welcome .square')];\n      evaluation.targetCells.forEach((cell) => {\n        const [x, y] = cell;\n        const index = board.findIndex((cell) => {\n          const [i, j] = cell;\n          return x === i && y == j;\n        });\n        squares[index].style.backgroundColor = 'hsl(0, 0%, 100%)';\n      });\n    }\n  });\n}\n\nfunction addClickListener(square, players, location) {\n  square.addEventListener('click', () => {\n    const ship = (0,_place_js__WEBPACK_IMPORTED_MODULE_1__.popShip)();\n    const evaluation = players.ai.opponentBoard.evaluatePlacement(\n      location,\n      (0,_place_js__WEBPACK_IMPORTED_MODULE_1__.getOrientation)(),\n      (0,_place_js__WEBPACK_IMPORTED_MODULE_1__.getShipLength)(ship),\n    );\n    if (evaluation.valid) {\n      players.ai.opponentBoard.place(location, ship, (0,_place_js__WEBPACK_IMPORTED_MODULE_1__.getOrientation)());\n      renderGame(players);\n      if ((0,_place_js__WEBPACK_IMPORTED_MODULE_1__.allShipsPlaced)()) {\n        (0,_place_js__WEBPACK_IMPORTED_MODULE_1__.resetShips)();\n        const body = document.querySelector('body');\n        body.removeChild(document.querySelector('.overlay'));\n        body.removeChild(document.querySelector('.welcome'));\n      }\n    } else {\n      (0,_place_js__WEBPACK_IMPORTED_MODULE_1__.pushShip)(ship);\n    }\n  });\n}\n\nfunction renderPlacementBoard(players) {\n  const ai = players.ai;\n  const boardContainer = document.createElement('div');\n  boardContainer.classList.add('board');\n  ai.opponentBoard.board.forEach((row, i) =>\n    row.forEach((cell, j) => {\n      const square = document.createElement('div');\n      square.classList.add('square');\n      renderShipBody(ai, square, [i, j]);\n      addMouseoverListener(square, ai, [i, j]);\n      addMouseoutListener(square, ai, [i, j]);\n      addClickListener(square, players, [i, j]);\n      boardContainer.appendChild(square);\n    }),\n  );\n  return boardContainer;\n}\n\nfunction displayWelcome(players) {\n  const container = document.createElement('div');\n  container.classList.add('welcome');\n  const heading = document.createElement('h2');\n  heading.innerText = 'Welcome!';\n  container.appendChild(heading);\n  const instruction = document.createElement('p');\n  instruction.classList.add('instruction');\n  instruction.innerText = `Place your ${(0,_place_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentShip)()}.`;\n  container.appendChild(instruction);\n  container.appendChild(renderPlacementBoard(players));\n  const button = document.createElement('button');\n  button.innerText = 'Rotate Ship';\n  button.addEventListener('click', _place_js__WEBPACK_IMPORTED_MODULE_1__.toggleOrientation);\n  container.appendChild(button);\n  const overlay = renderOverlay();\n  const body = document.querySelector('body');\n  body.appendChild(overlay);\n  body.appendChild(container);\n}\n\nfunction renderGame(players) {\n  const body = document.querySelector('body');\n  body.replaceChildren();\n  body.appendChild(renderHeader());\n  body.appendChild(renderMain(players));\n  body.appendChild(renderFooter());\n  displayWelcome(players);\n}\n\n\n//# sourceURL=webpack://battleship/./src/render.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NewBattleship: () => (/* binding */ NewBattleship),\n/* harmony export */   NewCarrier: () => (/* binding */ NewCarrier),\n/* harmony export */   NewCruiser: () => (/* binding */ NewCruiser),\n/* harmony export */   NewDestroyer: () => (/* binding */ NewDestroyer),\n/* harmony export */   NewSubmarine: () => (/* binding */ NewSubmarine)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hitCount = 0;\n  }\n  hit = () => (this.hitCount += 1);\n  isSunk = () => (this.hitCount === this.length ? true : false);\n}\n\nfunction NewCarrier() {\n  const carrier = new Ship(5);\n  return carrier;\n}\n\nfunction NewBattleship() {\n  const battleship = new Ship(4);\n  return battleship;\n}\n\nfunction NewCruiser() {\n  const cruiser = new Ship(3);\n  return cruiser;\n}\n\nfunction NewSubmarine() {\n  const submarine = new Ship(3);\n  return submarine;\n}\n\nfunction NewDestroyer() {\n  const destroyer = new Ship(2);\n  return destroyer;\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/ships.js?");

/***/ }),

/***/ "./src/assets/Teko-VariableFont_wght.ttf":
/*!***********************************************!*\
  !*** ./src/assets/Teko-VariableFont_wght.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c304a82d8b73b2829fa.ttf\";\n\n//# sourceURL=webpack://battleship/./src/assets/Teko-VariableFont_wght.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;