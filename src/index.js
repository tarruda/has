'use strict';

module.exports = function (object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
};
