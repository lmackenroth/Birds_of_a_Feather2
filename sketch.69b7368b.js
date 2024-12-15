/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/p5/lib/p5.min.js":
/*!***************************************!*\
  !*** ./node_modules/p5/lib/p5.min.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! p5.js v1.11.1 October 31, 2024 */

/***/ }),

/***/ "./src/beak.ts":
/*!*********************!*\
  !*** ./src/beak.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   beak: () => (/* binding */ beak)
/* harmony export */ });
/* harmony import */ var _birdBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birdBody */ "./src/birdBody.ts");

class beak extends _birdBody__WEBPACK_IMPORTED_MODULE_0__.body {
    constructor(p5, birdBody) {
        super(p5);
        this.beaks = [];
        this.p5 = p5;
        this.birdBody = birdBody;
        console.log('beaks initialized');
    }
    draw() {
        super.draw();
        this.p5.noStroke();
        this.beaks.forEach((beak1) => {
            this.p5.fill(beak1.fillColor);
            this.p5.triangle(beak1.x1, beak1.y1, beak1.x2, beak1.y2, beak1.x3, beak1.y3);
        });
    }
    beakTri() {
    }
    calculateVertices2(x, y) {
        return {
            x1: x - 3,
            y1: y + 1,
            x2: x - 3,
            y2: y - 1,
            x3: x - 6,
            y3: y
        };
    }
    setColors() {
        return {
            fillColor: this.p5.color(this.p5.random(0, 255), this.p5.random(0, 255), this.p5.random(0, 255), 150)
        };
    }
    AddTriangle() {
        if (this.birdBody.lastX1 === null || this.birdBody.lastY1 === null) {
            console.error("Error: lastX1 or lastY1 is null, cannot add triangle.");
            return;
        }
        const x = this.birdBody.lastX1;
        const y = this.birdBody.lastY1;
        const { x1, y1, x2, y2, x3, y3 } = this.calculateVertices2(x, y);
        const { fillColor } = this.setColors();
        this.beaks.push({ x1, y1, x2, y2, x3, y3, fillColor });
        this.lastX1 = x1;
        this.lastY1 = y1;
        console.log(`Triangle added with vertices: (${x1}, ${y1}), (${x2}, ${y2}), (${x3}, ${y3})`);
    }
    updatePosition(x, y) {
        this.beaks = this.beaks.map((beak) => {
            const { x1, y1, x2, y2, x3, y3 } = this.calculateVertices2(x, y);
            return Object.assign(Object.assign({}, beak), { x1,
                y1,
                x2,
                y2,
                x3,
                y3 });
        });
        console.log(`Updated beak positions to (${x}, ${y})`);
    }
}


/***/ }),

/***/ "./src/birdBody.ts":
/*!*************************!*\
  !*** ./src/birdBody.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   body: () => (/* binding */ body)
/* harmony export */ });
class body {
    constructor(p5) {
        this.triangles = [];
        this.lastX1 = null;
        this.lastY1 = null;
        this.p5 = p5;
        console.log('Triangles initialized');
    }
    draw() {
        this.p5.noStroke();
        this.triangles.forEach((triangle) => {
            this.p5.fill(triangle.fillColor);
            this.p5.triangle(triangle.x1, triangle.y1, triangle.x2, triangle.y2, triangle.x3, triangle.y3);
        });
    }
    calculateVertices(x, y, size) {
        return {
            x1: x - size / 2,
            y1: y - size,
            x2: x + size / 2,
            y2: y + size,
            x3: x + 3 * (size / 2),
            y3: y + size
        };
    }
    setColors() {
        return {
            fillColor: this.p5.color(this.p5.random(0, 255), this.p5.random(0, 255), this.p5.random(0, 255), 150)
        };
    }
    AddTriangle() {
        const x = this.p5.mouseX;
        const y = this.p5.mouseY;
        const size = this.p5.random(5, 10);
        const { x1, y1, x2, y2, x3, y3 } = this.calculateVertices(x, y, size);
        const { fillColor } = this.setColors();
        this.triangles.push({ x1, y1, x2, y2, x3, y3, fillColor });
        this.lastX1 = x1;
        this.lastY1 = y1;
        console.log(`Triangle added with vertices: (${x1}, ${y1}), (${x2}, ${y2}), (${x3}, ${y3})`);
    }
    move(dx, dy) {
        this.triangles = this.triangles.map((triangle) => (Object.assign(Object.assign({}, triangle), { x1: triangle.x1 + dx, y1: triangle.y1 + dy, x2: triangle.x2 + dx, y2: triangle.y2 + dy, x3: triangle.x3 + dx, y3: triangle.y3 + dy })));
        if (this.lastX1 !== null)
            this.lastX1 += dx;
        if (this.lastY1 !== null)
            this.lastY1 += dy;
    }
}


/***/ }),

/***/ "./src/birdHead.ts":
/*!*************************!*\
  !*** ./src/birdHead.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   head: () => (/* binding */ head)
/* harmony export */ });
/* harmony import */ var _birdBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birdBody */ "./src/birdBody.ts");

class head extends _birdBody__WEBPACK_IMPORTED_MODULE_0__.body {
    constructor(p5) {
        super(p5);
        this.circles = [];
        this.p5 = p5;
        console.log('triangles initialized');
    }
    draw() {
        super.draw();
        this.p5.noStroke();
        this.circles.forEach((circle) => {
            this.p5.fill(circle.fillColor);
            this.p5.circle(circle.x, circle.y, 5);
        });
    }
    AddCircle(x, y) {
        const xCircle = x;
        const yCircle = y;
        const fillColor = this.p5.color(this.p5.random(0, 255), this.p5.random(0, 255), this.p5.random(0, 255), 150);
        this.circles.push({ x: xCircle, y: yCircle, fillColor });
        console.log(`Circle added at (${xCircle}, ${yCircle})`);
    }
    updatePosition(x, y) {
        this.circles = this.circles.map((circle) => (Object.assign(Object.assign({}, circle), { x: x, y: y })));
        console.log(`Updated circle positions to (${x}, ${y})`);
    }
}


/***/ }),

/***/ "./src/clouds.ts":
/*!***********************!*\
  !*** ./src/clouds.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clouds: () => (/* binding */ clouds)
/* harmony export */ });
class clouds {
    constructor(p5, index) {
        this.clouds = [];
        this.p5 = p5;
        this.cloudx = 100;
        this.cloudy = 100;
        this.index = index;
    }
    addCloud() {
        if (this.clouds.length < this.index) {
            const x = this.p5.random(0, this.p5.width);
            const y = this.p5.random(0, this.p5.height);
            this.clouds.push({ x, y });
        }
    }
    draw() {
        this.p5.noStroke();
        this.p5.fill(250, 250, 240, 50);
        this.clouds.forEach((cloud) => {
            this.makeCloud(cloud.x, cloud.y);
            cloud.x += 0.1;
            if (cloud.x > this.p5.width + 70) {
                cloud.x = -70;
                cloud.y = this.p5.random(0, this.p5.height);
            }
        });
    }
    makeCloud(cloudx, cloudy) {
        this.p5.ellipse(cloudx, cloudy, 70, 50);
        this.p5.ellipse(cloudx + 10, cloudy + 10, 70, 50);
        this.p5.ellipse(cloudx - 20, cloudy + 10, 70, 50);
    }
}


/***/ }),

/***/ "./src/flyingBirds.ts":
/*!****************************!*\
  !*** ./src/flyingBirds.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   flyingBirds: () => (/* binding */ flyingBirds)
/* harmony export */ });
/* harmony import */ var _birdHead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birdHead */ "./src/birdHead.ts");
/* harmony import */ var _beak__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beak */ "./src/beak.ts");
/* harmony import */ var _birdBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./birdBody */ "./src/birdBody.ts");
/* harmony import */ var _wings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wings */ "./src/wings.ts");




class flyingBirds {
    constructor(p5, x, y) {
        this.p5 = p5;
        this.birdBody = new _birdBody__WEBPACK_IMPORTED_MODULE_2__.body(p5);
        this.birdHead = new _birdHead__WEBPACK_IMPORTED_MODULE_0__.head(p5);
        this.birdBeak = new _beak__WEBPACK_IMPORTED_MODULE_1__.beak(p5, this.birdBody);
        this.birdWing = new _wings__WEBPACK_IMPORTED_MODULE_3__.wing(p5, this.birdBody);
        this.position = { x, y };
        this.velocity = { x: -Math.random() * 2 - 2, y: Math.random() * 2 - 2 };
    }
    parts() {
        this.birdBody.AddTriangle();
        if (this.birdBody.lastX1 != null && this.birdBody.lastY1 != null) {
            this.birdHead.AddCircle(this.birdBody.lastX1, this.birdBody.lastY1);
            this.birdBeak.AddTriangle();
            this.birdWing.AddTriangle();
        }
        else {
            console.log('problem storing bird');
        }
    }
    draw() {
        this.birdBeak.draw();
        this.birdBody.draw();
        this.birdHead.draw();
        this.birdWing.draw();
    }
    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.birdBody.move(this.velocity.x, this.velocity.y);
        if (this.birdBody.lastX1 !== null && this.birdBody.lastY1 !== null) {
            const bodyX = this.birdBody.lastX1;
            const bodyY = this.birdBody.lastY1;
            this.birdHead.updatePosition(bodyX, bodyY);
            this.birdBeak.updatePosition(bodyX, bodyY);
            this.birdWing.updatePosition(bodyX, bodyY);
        }
    }
}


/***/ }),

/***/ "./src/gradiant.ts":
/*!*************************!*\
  !*** ./src/gradiant.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gradiants)
/* harmony export */ });
class gradiants {
    constructor(p5) {
        this.current = 0;
        this.lastSwitch = 0;
        this.switchInterval = 10000;
        this.transition = 2000;
        this.colors = [];
        this.p5 = p5;
        console.log('Gradiant initialized');
    }
    createColors(index) {
        for (let x = 0; x < index; x++) {
            const color1 = this.p5.color(this.p5.random(0, 125), this.p5.random(0, 20), this.p5.random(0, 125));
            const color2 = this.p5.color(this.p5.random(126, 250), this.p5.random(126, 250), this.p5.random(126, 250));
            this.colors.push({ color1, color2 });
        }
    }
    cyclePRog() {
        const currentTime = this.p5.millis();
        const timeFrame = currentTime - this.lastSwitch;
        const cycleDuration = this.switchInterval + this.transition;
        return timeFrame / cycleDuration;
    }
    transitionProg() {
        const currentTime = this.p5.millis();
        const timeFrame = currentTime - this.lastSwitch;
        if (timeFrame < 0) {
            return 0;
        }
        return this.p5.constrain(timeFrame / this.transition, 0, 1);
    }
    switch() {
        const cycle = this.cyclePRog();
        if (cycle >= 1) {
            this.current = (this.current + 1) % this.colors.length;
            this.lastSwitch = this.p5.millis();
        }
    }
    render() {
        if (this.colors.length === 0)
            return;
        const progress = this.transitionProg();
        const nextIndex = (this.current + 1) % this.colors.length;
        this.switch();
        const { color1: currColor1, color2: currColor2 } = this.colors[this.current];
        const { color1: nextColor1, color2: nextColor2 } = this.colors[nextIndex];
        for (let y = 0; y < this.p5.height; y++) {
            const inter = this.p5.map(y, 0, this.p5.height, 0, 1);
            const blend1 = this.p5.lerpColor(currColor1, nextColor1, progress);
            const blend2 = this.p5.lerpColor(currColor2, nextColor2, progress);
            const c = this.p5.lerpColor(blend1, blend2, inter);
            this.p5.stroke(c);
            this.p5.line(0, y, this.p5.width, y);
        }
    }
}


/***/ }),

/***/ "./src/wings.ts":
/*!**********************!*\
  !*** ./src/wings.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wing: () => (/* binding */ wing)
/* harmony export */ });
/* harmony import */ var _birdBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./birdBody */ "./src/birdBody.ts");

class wing extends _birdBody__WEBPACK_IMPORTED_MODULE_0__.body {
    constructor(p5, birdBody) {
        super(p5);
        this.wings = [];
        this.p5 = p5;
        this.birdBody = birdBody;
        console.log('wings initialized');
    }
    draw() {
        super.draw();
        this.p5.noStroke();
        this.wings.forEach((wing1) => {
            this.p5.fill(wing1.fillColor);
            this.p5.triangle(wing1.x1, wing1.y1, wing1.x2, wing1.y2, wing1.x3, wing1.y3);
        });
    }
    calculateVertices3(x, y) {
        return {
            x1: x + 6,
            y1: y + 6,
            x2: x + 20,
            y2: y + 6,
            x3: x + 9.5,
            y3: y + 12
        };
    }
    setColors() {
        return {
            fillColor: this.p5.color(this.p5.random(0, 255), this.p5.random(0, 255), this.p5.random(0, 255), 150)
        };
    }
    AddTriangle() {
        if (this.birdBody.lastX1 === null || this.birdBody.lastY1 === null) {
            console.error("Error: lastX1 or lastY1 is null, cannot add triangle.");
            return;
        }
        const x = this.birdBody.lastX1;
        const y = this.birdBody.lastY1;
        const { x1, y1, x2, y2, x3, y3 } = this.calculateVertices3(x, y);
        const { fillColor } = this.setColors();
        this.wings.push({ x1, y1, x2, y2, x3, y3, fillColor });
        this.lastX1 = x1;
        this.lastY1 = y1;
        console.log(`Triangle added with vertices: (${x1}, ${y1}), (${x2}, ${y2}), (${x3}, ${y3})`);
    }
    updatePosition(x, y) {
        this.wings = this.wings.map((wing) => {
            const { x1, y1, x2, y2, x3, y3 } = this.calculateVertices3(x, y);
            return Object.assign(Object.assign({}, wing), { x1,
                y1,
                x2,
                y2,
                x3,
                y3 });
        });
        console.log(`Updated wing positions to (${x}, ${y})`);
    }
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/canvas.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.min.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gradiant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gradiant */ "./src/gradiant.ts");
/* harmony import */ var _flyingBirds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flyingBirds */ "./src/flyingBirds.ts");
/* harmony import */ var _clouds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clouds */ "./src/clouds.ts");




function project(p5) {
    let gradiant;
    let birds = [];
    let cloud;
    let cloudCount = 20;
    let canvas;
    p5.setup = () => {
        canvas = p5.createCanvas(1000, 500);
        centerCanvas();
        gradiant = new _gradiant__WEBPACK_IMPORTED_MODULE_1__["default"](p5);
        gradiant.createColors(10);
        cloud = new _clouds__WEBPACK_IMPORTED_MODULE_3__.clouds(p5, cloudCount);
        for (let i = 0; i < cloudCount; i++) {
            cloud.addCloud();
        }
    };
    const centerCanvas = () => {
        const x = (p5.windowWidth - p5.width) / 2;
        const y = (p5.windowHeight - p5.height) / 2;
        canvas.position(x, y);
    };
    p5.draw = () => {
        gradiant.render();
        birds.forEach(bird => {
            bird.update();
            bird.draw();
        });
        cloud.draw();
    };
    p5.mousePressed = () => {
        const newBird = new _flyingBirds__WEBPACK_IMPORTED_MODULE_2__.flyingBirds(p5, p5.mouseX, p5.mouseY);
        newBird.parts();
        birds.push(newBird);
    };
}
new (p5__WEBPACK_IMPORTED_MODULE_0___default())(project);

})();

/******/ })()
;
//# sourceMappingURL=sketch.69b7368b.map