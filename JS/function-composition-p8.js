/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    if (functions.length === 0) return x;
    return functions
      .slice()
      .reverse()
      .reduce((prev, acc) => acc(prev), x);
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9

// var compose = function (functions) {
//     return function (x) {
//       return functions.reduce((prev, acc) => prev + acc(prev), x);
//     };
//   };
