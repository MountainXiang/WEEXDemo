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

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/b7467334591144bc5df0ea151dd6870e', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/b7467334591144bc5df0ea151dd6870e',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "children": [
	    {
	      "type": "container",
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "header"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "style": {
	                "width": 800,
	                "height": 400
	              },
	              "attr": {
	                "src": "http://h.hiphotos.baidu.com/image/pic/item/5243fbf2b21193138ff8eeb167380cd791238d73.jpg"
	              },
	              "events": {
	                "error": "this.src='default.png'"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "headerText"
	              ],
	              "attr": {
	                "value": "HEADER"
	              }
	            },
	            {
	              "type": "div",
	              "children": [
	                {
	                  "type": "container",
	                  "repeat": function () {return this.list},
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "thumb"
	                      ],
	                      "attr": {
	                        "src": function () {return this.avatar}
	                      },
	                      "events": {
	                        "error": "this.src='default.png'"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": function () {return [this.gender]},
	                      "attr": {
	                        "value": function () {return this.nickname}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "header": {
	    "marginBottom": 10,
	    "marginLeft": 10,
	    "marginRight": 10,
	    "flexDirection": "column"
	  },
	  "headerText": {
	    "marginLeft": 10,
	    "marginRight": 10,
	    "fontSize": 60,
	    "textAlign": "left",
	    "color": "#817936"
	  },
	  "male": {
	    "fontSize": 40,
	    "color": "#145B7D",
	    "textAlign": "center"
	  },
	  "female": {
	    "fontSize": 40,
	    "color": "#FF6EC7",
	    "textAlign": "center"
	  },
	  "thumb": {
	    "marginLeft": 10,
	    "marginRight": 10,
	    "height": 600,
	    "backgroundColor": "#2F2F4F"
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    list: [{ gender: 'female', nickname: 'Angelababy', avatar: 'http://f.hiphotos.baidu.com/image/pic/item/4034970a304e251f68546714a386c9177e3e53bf.jpg' }, { gender: 'female', nickname: 'Han MeiMei', avatar: 'http://h.hiphotos.baidu.com/image/pic/item/b17eca8065380cd73e652101a544ad34588281e7.jpg' }, { gender: 'female', nickname: 'Avrail', avatar: 'http://h.hiphotos.baidu.com/image/pic/item/42a98226cffc1e17cd220fdd4e90f603728de9b9.jpg' }, { gender: 'female', nickname: 'Lucy', avatar: 'http://b.hiphotos.baidu.com/image/pic/item/55e736d12f2eb93852f2f91ed1628535e4dd6fbb.jpg' }, { gender: 'female', nickname: '金莎', avatar: 'http://b.hiphotos.baidu.com/image/pic/item/10dfa9ec8a136327135141df958fa0ec09fac79a.jpg' }, { gender: 'female', nickname: '高圆圆', avatar: 'http://f.hiphotos.baidu.com/image/pic/item/eac4b74543a982268ab7a8cb8e82b9014b90ebec.jpg' }, { gender: 'female', nickname: '刘诗诗', avatar: 'http://a.hiphotos.baidu.com/image/pic/item/8326cffc1e178a82f14dfc4cf203738da877e8ed.jpg' }, { gender: 'female', nickname: '赵丽颖', avatar: 'http://d.hiphotos.baidu.com/image/pic/item/b151f8198618367a893cfc312a738bd4b21ce5a1.jpg' }, { gender: 'female', nickname: '范冰冰', avatar: 'http://b.hiphotos.baidu.com/image/pic/item/cefc1e178a82b90103de40df778da9773812efef.jpg' }, { gender: 'female', nickname: '郑爽', avatar: 'http://g.hiphotos.baidu.com/image/pic/item/377adab44aed2e73dd5f05c08301a18b86d6faac.jpg' }, { gender: 'female', nickname: '杨幂', avatar: 'http://c.hiphotos.baidu.com/image/pic/item/8ad4b31c8701a18bdd6b91a39a2f07082938fe5e.jpg' }, { gender: 'female', nickname: '刘亦菲', avatar: 'http://f.hiphotos.baidu.com/image/pic/item/b999a9014c086e0678c7bca706087bf40bd1cbeb.jpg' }, { gender: 'female', nickname: '唐嫣', avatar: 'http://c.hiphotos.baidu.com/image/pic/item/0dd7912397dda1441fe3ef5eb6b7d0a20df48670.jpg' }, { gender: 'male', nickname: '金秀贤', avatar: 'http://h6.86.cc/walls/20151208/1440x900_e45b7ab57afc7eb.jpg' }, { gender: 'male', nickname: 'Faker', avatar: 'http://www.22551122.cc/imgall/o53xoltcpi2tkltdn5wq/uploads/allimg/150327/139-15032GAF0.jpg' }, { gender: 'male', nickname: '玄彬', avatar: 'http://img4.duitang.com/uploads/item/201604/09/20160409120144_ezAaC.thumb.700_0.jpeg' }, { gender: 'male', nickname: '鹿晗', avatar: 'http://www.xiaoxiongbizhi.com/wallpapers/1920_1200_85/2/x/2xnxkjhcc.jpg' }, { gender: 'male', nickname: 'EXO', avatar: 'http://cdn.duitang.com/uploads/blog/201510/28/20151028170418_JK3me.thumb.700_0.jpeg' }, { gender: 'male', nickname: '梅长苏', avatar: 'http://img5.duitang.com/uploads/blog/201601/18/20160118153355_sWAa5.thumb.700_0.jpeg' }, { gender: 'male', nickname: '仙剑', avatar: 'http://cdn.duitang.com/uploads/item/201510/24/20151024201634_L5yrz.thumb.224_0.jpeg' }, { gender: 'male', nickname: '胡歌&霍建华', avatar: 'http://p4.image.hiapk.com/uploads/allimg/160223/7730-160223140046.jpg' }]
	  }}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);