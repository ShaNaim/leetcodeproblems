/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // return nums.filter((ele) => ele !== val);
  let result = [];
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== val) result.push(nums[index]);
  }
  return result;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

console.log(removeElement(nums, val));
