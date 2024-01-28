/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: (innerVal) => {
      if (innerVal === val) return true;
      throw "Not Equal";
    },
    notToBe: (innerVal) => {
      if (innerVal !== val) return true;
      throw "Equal";
    },
  };
};

console.log(expect(5).toBe(5));
console.log(expect({}).notToBe({}));
