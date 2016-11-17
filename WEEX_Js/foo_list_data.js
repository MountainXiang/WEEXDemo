/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	var __weex_template__ = __webpack_require__(8)
	var __weex_script__ = __webpack_require__(9)

	__weex_define__('@weex-component/53ac99ef7d0ac67c9a9d541587a720dc', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})

	__weex_bootstrap__('@weex-component/53ac99ef7d0ac67c9a9d541587a720dc',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)
	var __weex_template__ = __webpack_require__(6)
	var __weex_script__ = __webpack_require__(7)

	__weex_define__('@weex-component/foo-list', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(3)
	var __weex_style__ = __webpack_require__(4)
	var __weex_script__ = __webpack_require__(5)

	__weex_define__('@weex-component/foo', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "style": {
	    "flexDirection": "row"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "img"
	      ],
	      "attr": {
	        "src": function () {return this.image}
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  "img": {
	    "width": 100,
	    "height": 100
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	module.exports = {
	  data: function () {return {
	    title: null,
	    image: null
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.description}
	      }
	    },
	    {
	      "type": "foo",
	      "repeat": function () {return this.list},
	      "attr": {
	        "title": function () {return this.text},
	        "image": function () {return this.img}
	      }
	    }
	  ]
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    description: 'Description',

	    list: null
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "foo-list",
	  "attr": {
	    "list": function () {return this.list}
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    list: [{ text: '胡歌&霍建华', img: 'http://p4.image.hiapk.com/uploads/allimg/160223/7730-160223140046.jpg' }, { text: '仙剑', img: 'http://cdn.duitang.com/uploads/item/201510/24/20151024201634_L5yrz.thumb.224_0.jpeg' }, { text: '梅长苏', img: 'http://img5.duitang.com/uploads/blog/201601/18/20160118153355_sWAa5.thumb.700_0.jpeg' }]
	  }}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);