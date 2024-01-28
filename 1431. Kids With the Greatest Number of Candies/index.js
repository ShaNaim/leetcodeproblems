/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxVal = candies.reduce((max, c) => Math.max(max, c), Number.MIN_SAFE_INTEGER);
  return candies.map((value) => value + extraCandies >= maxVal);
};
