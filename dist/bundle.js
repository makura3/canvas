/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var win = window,\n      doc = document,\n      Settings = function Settings() {\n    var _this2 = this;\n\n    Settings.prototype.init = function () {\n      _this2.canvas_init();\n      _this2.event_set_handler();\n    };\n\n    // init\n    Settings.prototype.canvas_init = function () {\n      _this2.canvas = doc.getElementById('canvas');\n      _this2.context = _this2.canvas.getContext('2d');\n    };\n\n    // event set\n    Settings.prototype.event_set_handler = function () {\n      var _this = _this2;\n      _this2.canvas.addEventListener('click', click_handler);\n\n      function click_handler(e) {\n        var point = _this.get_event_point(e.clientX, e.clientY);\n        _this.RectRender(point.x, point.y, 100, 100);\n      }\n    };\n\n    // get event point\n    Settings.prototype.get_event_point = function (client_X, client_Y) {\n      return {\n        x: client_X - _this2.canvas.getBoundingClientRect().left,\n        y: client_Y - _this2.canvas.getBoundingClientRect().top\n      };\n    };\n\n    // render\n    Settings.prototype.RectRender = function (x, y, w, h) {\n      var _this = _this2;\n      // var ctx = this.context;\n      // ctx.beginPath();\n      _this.context.fillRect(x - 50, y - 50, w, h);\n    };\n  };\n\n  var setting = new Settings();\n  setting.init();\n})(window);\n\n//# sourceURL=webpack:///./src/assets/index.js?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/assets/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/assets/index.js */\"./src/assets/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/index.js?");

/***/ })

/******/ });