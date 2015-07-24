Function.prototype.bind = require("function-bind");
var hasOwn = Object.prototype.hasOwnProperty;

module.exports = function has(obj, property) {
  return hasOwn(obj, property);
};
