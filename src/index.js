'use strict';

var bind = require('function-bind');
var hasImpl = bind.call(Function.call, Object.prototype.hasOwnProperty);

module.exports = function hasOwnProperty(target) {
  if (target === null || target === void 0) {
    return false;
  }

  return hasImpl.apply(void 0, arguments);
};
