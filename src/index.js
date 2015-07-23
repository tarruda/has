var hasOwn = Object.prototype.hasOwnProperty;
Function.prototype.bind = require("function-bind");

module.exports = function has(obj, property) {
  return hasOwn.call(obj, property);
};
