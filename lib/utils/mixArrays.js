"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mixArrays = function mixArrays(arr1, arr2, m) {
  return arr1.map(function (v, i) {
    return (1 - m) * v + m * arr2[i];
  });
};

exports.default = mixArrays;
//# sourceMappingURL=mixArrays.js.map