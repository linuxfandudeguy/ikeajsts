/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Router = void 0;
const vdom_1 = __webpack_require__(/*! ./vdom */ "./src/vdom.ts"); // Import the createElement function
class Router {
    routes = {};
    currentPath = window.location.pathname;
    constructor() {
        window.addEventListener("popstate", () => {
            this.navigate(window.location.pathname);
        });
    }
    register(path, route) {
        this.routes[path] = route;
    }
    navigate(path) {
        this.currentPath = path;
        window.history.pushState({}, "", path);
        this.render();
    }
    render() {
        const route = this.routes[this.currentPath] || this.routes["*"];
        const vnode = route.render();
        const rootElement = document.getElementById("app");
        if (rootElement) {
            rootElement.innerHTML = ""; // Clear existing content
            rootElement.appendChild((0, vdom_1.createElement)(vnode)); // Render the new content
        }
    }
}
exports.Router = Router;


/***/ }),

/***/ "./src/vdom.ts":
/*!*********************!*\
  !*** ./src/vdom.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


// src/vdom.ts
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createElement = createElement;
function createElement(vnode) {
    const element = document.createElement(vnode.tag);
    // Use vnode.props or an empty object as a fallback
    const props = vnode.props || {};
    // Set properties
    Object.keys(props).forEach((key) => {
        element[key] = props[key]; // Type assertion for dynamic properties
    });
    // Append children
    if (vnode.children) {
        vnode.children.forEach((child) => {
            element.appendChild(createElement(child));
        });
    }
    return element;
}


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const router_1 = __webpack_require__(/*! ./router */ "./src/router.ts"); // Import the Router class
// Initialize the router
const router = new router_1.Router();
// Register routes
router.register("/", {
    render: () => ({
        tag: "div",
        props: { id: "welcome" },
        children: [{ tag: "h1", props: { innerText: "Welcome to TypeScriptX!" } }],
    }),
});
// Define a simple 404 handler for unmatched routes
router.register("*", {
    render: () => ({
        tag: "div",
        children: [{ tag: "h1", props: { innerText: "404 - Not Found" } }],
    }),
});
// Navigate to the root on load
router.navigate(window.location.pathname);
// Optional: Render the app initially
document.addEventListener("DOMContentLoaded", () => {
    router.render();
});

})();

/******/ })()
;
//# sourceMappingURL=index.js.map