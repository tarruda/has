'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function (object, property) {
  return hasOwnProperty.call(object, property);
};
