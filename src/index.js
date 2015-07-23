var hasOwn = Function.call.bind(Object.prototype.hasOwnProperty);

module.exports = function has(obj, property) {
  return hasOwn(obj, property);
};
