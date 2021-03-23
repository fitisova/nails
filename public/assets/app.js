var app;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/public/acardeon.js":
/*!*******************************!*\
  !*** ./js/public/acardeon.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
// $( document.body ).click(function () {
//     if ( $( "div" ).first().is( ":hidden" ) ) {
//       $( "div" ).slideDown( "slow" );
//     } else {
//       $( "div" ).hide();
//     }
document.querySelectorAll(".past-works__imgs-btn").forEach(function (btn) {
  btn.onclick = function () {
    if ($(".past-works__imgs-container_acardeon").first().is(":hidden")) {
      $(".past-works__imgs-container_acardeon").slideDown("slow");
      $(".past-works__imgs-container_acardeon").css("display", "flex");
    } else {
      $(".past-works__imgs-container_acardeon").slideUp();
    }
  };
});

/***/ }),

/***/ "./js/public/header.js":
/*!*****************************!*\
  !*** ./js/public/header.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
document.querySelectorAll(".header").forEach(function (header) {
  header.querySelector(".hamburger").onclick = function () {
    header.querySelector(".hamburger__line-container").querySelector(".hamburger__line:first-child").classList.toggle("hamburger__line_left-active");
    header.querySelector(".hamburger__line-container").querySelector(".hamburger__line:last-child").classList.toggle("hamburger__line_right-active");
    header.querySelector(".hamburger__line_midl").classList.toggle("hamburger__line_none");

    if (document.documentElement.clientWidth <= 1200) {
      if ($(".header__content-mobil ").is(":hidden")) {
        $(".header__content-mobil ").slideDown("slow");
        $(".header__content-mobil ").css("display", "flex");
      } else {
        $(".header__content-mobil ").slideUp("slow");
      }
    } else {
      return;
    }
  };
});

/***/ }),

/***/ "./js/public/map.js":
/*!**************************!*\
  !*** ./js/public/map.js ***!
  \**************************/
/***/ (() => {

ymaps.ready(init);

function init() {
  // Создание карты.
  // центрирование и задание зума  а так же настройка контроллеров
  var map = new ymaps.Map("map", {
    center: [47.210950574276836, 39.68735350000001],
    zoom: 14,
    controls: [],
    innerHeight: 700,
    outerHeight: 700
  }, {
    suppressMapOpenBlock: true
  });
  map.behaviors.disable('scrollZoom'); // установка маркера на карте и его катомизация

  var myPlacemark = new ymaps.Placemark([47.210950574276836, 39.68735350000001], {});
  map.geoObjects.add(myPlacemark);
}

/***/ }),

/***/ "./js/public/popup.js":
/*!****************************!*\
  !*** ./js/public/popup.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask */ "../../node_modules/inputmask/index.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");

$(document).ready(function ($) {
  $('.popup-open').click(function () {
    $('.popup-fade').fadeIn();
    return false;
  });
  $('.popup-close').click(function () {
    $(this).parents('.popup-fade').fadeOut();
    return false;
  });
  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup-fade').fadeOut();
    }
  });
  $('.popup-fade').click(function (e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut();
    }
  });
});
var im = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())("+7 (999) 999-99-99");
im.mask(document.querySelector(".inputPhone"));

document.querySelector(".popup__btn").onclick = function () {
  var phone = document.querySelector(".inputPhone").value;

  if (phone.length == 18 && phone.indexOf('_') == -1) {
    fetch("/addUser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        phone: phone
      })
    }).then(function (res) {
      if (res.status == 200) {
        alert("Операция завершина успешно");
        document.location.reload();
      } else {
        alert("Что-то пошло не так");
        document.location.reload();
      }
    });
  } else {
    alert("Пожалуйста убедитесь в правильности написания номера");
  }
};

/***/ }),

/***/ "./js/public/script.js":
/*!*****************************!*\
  !*** ./js/public/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./js/public/map.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./js/public/header.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup */ "./js/public/popup.js");
/* harmony import */ var _acardeon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./acardeon */ "./js/public/acardeon.js");
/* harmony import */ var _acardeon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_acardeon__WEBPACK_IMPORTED_MODULE_3__);





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./js/public/script.js","vendor"]
/******/ 		];
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
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_name_"] = self["webpackChunk_name_"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	app = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map