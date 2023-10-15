// let len = 10;
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  return Array.from(new Set(nums)).length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));
