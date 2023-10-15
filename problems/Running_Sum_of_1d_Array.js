const testArray = [1, 2, 3, 4];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
	const resultSum = [0];
	nums.forEach((element, index) => {
		resultSum.push(element + resultSum[index]);
	});
	resultSum.shift();
	return resultSum;
};
runningSum(testArray);
