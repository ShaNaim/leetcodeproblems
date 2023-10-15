/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.indexOf(target) !== -1) return nums.indexOf(target);
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  let count = 1;
  while (true) {
    if (nums.indexOf(target - count) !== -1) {
      return nums.indexOf(target - count) + 1;
    }
    count++;
  }
};

console.log(searchInsert([-3, -2, -1, 1, 3, 5, 6], 0));

// i = 1 , 1 < 0
