/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const chache = {};
  return function (...args) {
    if (chache.hasOwnProperty(JSON.stringify(args))) return chache[JSON.stringify(args)];
    return (chache[JSON.stringify(args)] = fn(...args));
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
