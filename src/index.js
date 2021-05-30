'use strict';

var hasOwnProperty = Object.hasOwnProperty;

module.exports = function has(obj, prop) {
  return hasOwnProperty.call(obj, prop);
};
