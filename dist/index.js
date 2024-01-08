"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// dist/core/generateUniqueId.js
var require_generateUniqueId = __commonJS({
  "dist/core/generateUniqueId.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var lodash_1 = require("lodash");
    var generateUniqueId2 = (others) => {
      const newId = (0, lodash_1.uniqueId)();
      let isTaken = false;
      others.forEach(({ id }) => {
        if (newId === id) {
          isTaken = true;
        }
      });
      if (isTaken) {
        return generateUniqueId2(others);
      } else {
        return newId;
      }
    };
    exports2.default = generateUniqueId2;
  }
});

// dist/core/calculateDistance.js
var require_calculateDistance = __commonJS({
  "dist/core/calculateDistance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var calculateDistance2 = (x1, y1, x2, y2) => {
      const xDistance = Math.abs(x1 - x2);
      const yDistance = Math.abs(y1 - y2);
      const distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
      return distance;
    };
    exports2.default = calculateDistance2;
  }
});

// dist/core/getRandomNumber.js
var require_getRandomNumber = __commonJS({
  "dist/core/getRandomNumber.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var getRandomNumber2 = (min, max) => Math.random() * (max - min) + min;
    exports2.default = getRandomNumber2;
  }
});

// dist/core/generatePointWithoutCollisions.js
var require_generatePointWithoutCollisions = __commonJS({
  "dist/core/generatePointWithoutCollisions.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var lodash_1 = require("lodash");
    var getRandomNumber_1 = __importDefault(require_getRandomNumber());
    var generatePointWithoutCollisions2 = (others, width, height, distance) => {
      try {
        const x = (0, getRandomNumber_1.default)(distance, width - distance);
        const y = (0, getRandomNumber_1.default)(distance, height - distance);
        let hasCollides = false;
        others.forEach(({ x: otherX, y: otherY }) => {
          if ((0, lodash_1.inRange)(x, otherX - distance, otherX + distance) && (0, lodash_1.inRange)(y, otherY - distance, otherY + distance)) {
            hasCollides = true;
          }
        });
        if (hasCollides) {
          return generatePointWithoutCollisions2(others, width, height, distance);
        } else {
          return { x, y };
        }
      } catch (e) {
        return generatePointWithoutCollisions2(others, width, height, distance);
      }
    };
    exports2.default = generatePointWithoutCollisions2;
  }
});

// dist/core/getMiddlePoint.js
var require_getMiddlePoint = __commonJS({
  "dist/core/getMiddlePoint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var getMiddlePoint2 = (x1, y1, x2, y2) => {
      const xDistance = Math.abs(x1 - x2);
      const yDistance = Math.abs(y1 - y2);
      const middleX = x2 >= x1 ? xDistance / 2 : -xDistance / 2;
      const middleY = y2 >= y1 ? yDistance / 2 : -yDistance / 2;
      return {
        x: middleX,
        y: middleY
      };
    };
    exports2.default = getMiddlePoint2;
  }
});

// dist/core/getRandomBoolean.js
var require_getRandomBoolean = __commonJS({
  "dist/core/getRandomBoolean.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var getRandomBoolean2 = () => Boolean(Math.round(Math.random()));
    exports2.default = getRandomBoolean2;
  }
});

// dist/core/checkForCollision.js
var require_checkForCollision = __commonJS({
  "dist/core/checkForCollision.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var lodash_1 = require("lodash");
    var checkForCollision3 = (x1, y1, x2, y2, collisionDistance, callback) => {
      if (((0, lodash_1.inRange)(x1, x2 - collisionDistance, x2) || (0, lodash_1.inRange)(x1, x2, x2 + collisionDistance)) && ((0, lodash_1.inRange)(y1, y2 - collisionDistance, y2) || (0, lodash_1.inRange)(y1, y2, y2 + collisionDistance)))
        callback();
    };
    exports2.default = checkForCollision3;
  }
});

// dist/core/getAngle.js
var require_getAngle = __commonJS({
  "dist/core/getAngle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var pi2 = Math.PI;
    var getAngle2 = (startX, startY, endX, endY) => {
      const xDifference = endX - startX;
      const yDifference = endY - startY;
      let toQuarter;
      if (xDifference >= 0) {
        if (yDifference >= 0) {
          toQuarter = 2;
        } else {
          toQuarter = 1;
        }
      } else {
        if (yDifference >= 0) {
          toQuarter = 3;
        } else {
          toQuarter = 4;
        }
      }
      const xChange = Math.abs(endX - startX);
      const yChange = Math.abs(endY - startY);
      const tan = toQuarter === 1 || toQuarter === 3 ? xChange / yChange : yChange / xChange;
      const angle_in_radians = (toQuarter - 1) * pi2 / 2 + Math.atan(tan);
      return angle_in_radians;
    };
    exports2.default = getAngle2;
  }
});

// dist/core/checkForCollisionInArray.js
var require_checkForCollisionInArray = __commonJS({
  "dist/core/checkForCollisionInArray.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var __1 = require_dist();
    var checkForCollisionInArray2 = (x, y, radius, arr, callback, repeated = 1) => {
      repeated++;
      if (repeated >= 100) {
        console.error("Can't get needed dimesions, returning current dimesions");
        return {
          x,
          y
        };
      }
      let hasCollides = false;
      let collisionX = 0;
      let collisionY = 0;
      arr.forEach(({ x: pointX, y: pointY }) => {
        if (hasCollides)
          return;
        (0, __1.checkForCollision)(x, y, pointX, pointY, radius, () => {
          hasCollides = true;
          collisionX = pointX;
          collisionY = pointY;
        });
      });
      if (hasCollides) {
        const collisionPoint = {
          x: collisionX,
          y: collisionY
        };
        callback && callback(collisionPoint);
        return collisionPoint;
      }
      return false;
    };
    exports2.default = checkForCollisionInArray2;
  }
});

// dist/index.js
var require_dist = __commonJS({
  "dist/index.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.checkForCollisionInArray = exports2.getAngle = exports2.checkForCollision = exports2.getRandomBoolean = exports2.getMiddlePoint = exports2.generatePointWithoutCollisions = exports2.calculateDistance = exports2.generateUniqueId = void 0;
    var generateUniqueId_1 = require_generateUniqueId();
    Object.defineProperty(exports2, "generateUniqueId", { enumerable: true, get: function() {
      return __importDefault(generateUniqueId_1).default;
    } });
    var calculateDistance_1 = require_calculateDistance();
    Object.defineProperty(exports2, "calculateDistance", { enumerable: true, get: function() {
      return __importDefault(calculateDistance_1).default;
    } });
    var generatePointWithoutCollisions_1 = require_generatePointWithoutCollisions();
    Object.defineProperty(exports2, "generatePointWithoutCollisions", { enumerable: true, get: function() {
      return __importDefault(generatePointWithoutCollisions_1).default;
    } });
    var getMiddlePoint_1 = require_getMiddlePoint();
    Object.defineProperty(exports2, "getMiddlePoint", { enumerable: true, get: function() {
      return __importDefault(getMiddlePoint_1).default;
    } });
    var getRandomBoolean_1 = require_getRandomBoolean();
    Object.defineProperty(exports2, "getRandomBoolean", { enumerable: true, get: function() {
      return __importDefault(getRandomBoolean_1).default;
    } });
    var checkForCollision_1 = require_checkForCollision();
    Object.defineProperty(exports2, "checkForCollision", { enumerable: true, get: function() {
      return __importDefault(checkForCollision_1).default;
    } });
    var getAngle_1 = require_getAngle();
    Object.defineProperty(exports2, "getAngle", { enumerable: true, get: function() {
      return __importDefault(getAngle_1).default;
    } });
    var checkForCollisionInArray_1 = require_checkForCollisionInArray();
    Object.defineProperty(exports2, "checkForCollisionInArray", { enumerable: true, get: function() {
      return __importDefault(checkForCollisionInArray_1).default;
    } });
  }
});

// index.ts
var D_exports = {};
__export(D_exports, {
  calculateDistance: () => calculateDistance_default,
  checkForCollision: () => checkForCollision_default,
  checkForCollisionInArray: () => checkForCollisionInArray_default,
  generatePointWithoutCollisions: () => generatePointWithoutCollisions_default,
  generateUniqueId: () => generateUniqueId_default,
  getAngle: () => getAngle_default,
  getMiddlePoint: () => getMiddlePoint_default,
  getRandomBoolean: () => getRandomBoolean_default
});
module.exports = __toCommonJS(D_exports);

// core/generateUniqueId.ts
var import_lodash = require("lodash");
var generateUniqueId = (others) => {
  const newId = (0, import_lodash.uniqueId)();
  let isTaken = false;
  others.forEach(({ id }) => {
    if (newId === id) {
      isTaken = true;
    }
  });
  if (isTaken) {
    return generateUniqueId(others);
  } else {
    return newId;
  }
};
var generateUniqueId_default = generateUniqueId;

// core/calculateDistance.ts
var calculateDistance = (x1, y1, x2, y2) => {
  const xDistance = Math.abs(x1 - x2);
  const yDistance = Math.abs(y1 - y2);
  const distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
  return distance;
};
var calculateDistance_default = calculateDistance;

// core/generatePointWithoutCollisions.ts
var import_lodash2 = require("lodash");

// core/getRandomNumber.ts
var getRandomNumber = (min, max) => Math.random() * (max - min) + min;
var getRandomNumber_default = getRandomNumber;

// core/generatePointWithoutCollisions.ts
var generatePointWithoutCollisions = (others, width, height, distance) => {
  try {
    const x = getRandomNumber_default(distance, width - distance);
    const y = getRandomNumber_default(distance, height - distance);
    let hasCollides = false;
    others.forEach(({ x: otherX, y: otherY }) => {
      if ((0, import_lodash2.inRange)(x, otherX - distance, otherX + distance) && (0, import_lodash2.inRange)(y, otherY - distance, otherY + distance)) {
        hasCollides = true;
      }
    });
    if (hasCollides) {
      return generatePointWithoutCollisions(
        others,
        width,
        height,
        distance
      );
    } else {
      return { x, y };
    }
  } catch (e) {
    return generatePointWithoutCollisions(
      others,
      width,
      height,
      distance
    );
  }
};
var generatePointWithoutCollisions_default = generatePointWithoutCollisions;

// core/getMiddlePoint.ts
var getMiddlePoint = (x1, y1, x2, y2) => {
  const xDistance = Math.abs(x1 - x2);
  const yDistance = Math.abs(y1 - y2);
  const middleX = x2 >= x1 ? xDistance / 2 : -xDistance / 2;
  const middleY = y2 >= y1 ? yDistance / 2 : -yDistance / 2;
  return {
    x: middleX,
    y: middleY
  };
};
var getMiddlePoint_default = getMiddlePoint;

// core/getRandomBoolean.ts
var getRandomBoolean = () => Boolean(Math.round(Math.random()));
var getRandomBoolean_default = getRandomBoolean;

// core/checkForCollision.ts
var import_lodash3 = require("lodash");
var checkForCollision = (x1, y1, x2, y2, collisionDistance, callback) => {
  if (((0, import_lodash3.inRange)(x1, x2 - collisionDistance, x2) || (0, import_lodash3.inRange)(x1, x2, x2 + collisionDistance)) && ((0, import_lodash3.inRange)(y1, y2 - collisionDistance, y2) || (0, import_lodash3.inRange)(y1, y2, y2 + collisionDistance)))
    callback();
};
var checkForCollision_default = checkForCollision;

// core/getAngle.ts
var pi = Math.PI;
var getAngle = (startX, startY, endX, endY) => {
  const xDifference = endX - startX;
  const yDifference = endY - startY;
  let toQuarter;
  if (xDifference >= 0) {
    if (yDifference >= 0) {
      toQuarter = 2;
    } else {
      toQuarter = 1;
    }
  } else {
    if (yDifference >= 0) {
      toQuarter = 3;
    } else {
      toQuarter = 4;
    }
  }
  const xChange = Math.abs(endX - startX);
  const yChange = Math.abs(endY - startY);
  const tan = toQuarter === 1 || toQuarter === 3 ? xChange / yChange : yChange / xChange;
  const angle_in_radians = (toQuarter - 1) * pi / 2 + Math.atan(tan);
  return angle_in_radians;
};
var getAngle_default = getAngle;

// core/checkForCollisionInArray.ts
var import__ = __toESM(require_dist());
var checkForCollisionInArray = (x, y, radius, arr, callback, repeated = 1) => {
  repeated++;
  if (repeated >= 100) {
    console.error("Can't get needed dimesions, returning current dimesions");
    return {
      x,
      y
    };
  }
  let hasCollides = false;
  let collisionX = 0;
  let collisionY = 0;
  arr.forEach(({ x: pointX, y: pointY }) => {
    if (hasCollides)
      return;
    (0, import__.checkForCollision)(x, y, pointX, pointY, radius, () => {
      hasCollides = true;
      collisionX = pointX;
      collisionY = pointY;
    });
  });
  if (hasCollides) {
    const collisionPoint = {
      x: collisionX,
      y: collisionY
    };
    callback && callback(collisionPoint);
    return collisionPoint;
  }
  return false;
};
var checkForCollisionInArray_default = checkForCollisionInArray;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  calculateDistance,
  checkForCollision,
  checkForCollisionInArray,
  generatePointWithoutCollisions,
  generateUniqueId,
  getAngle,
  getMiddlePoint,
  getRandomBoolean
});
