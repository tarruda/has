'use strict';

var hasOwnProperty = {}.hasOwnProperty;
var call = hasOwnProperty.call;

module.exports = call.bind ? call.bind(hasOwnProperty) : function (O, P) {
  return call.call(hasOwnProperty, O, P);
};
