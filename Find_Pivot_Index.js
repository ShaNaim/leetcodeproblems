const testArray = [2, 1, -1];
const testArray2 = [1, 3, 7, 6, 5, 6];
const testArray3 = [8, 4, 3, 2, 2, 4, 2, 2];
const testArray4 = [1, 2, 3];
// console.log(`
// First :: ${testArray.slice(0, index).reduce((a, b) => a + b, 0)} Value:: ${testArray.slice(0, index)},
// Second :: ${testArray.slice(index + 1).reduce((a, b) => a + b, 0)}  Value:: ${testArray.slice(index + 1)},
// Index : ${index}
// Index Value: ${testArray[index]}
// `);
var pivotIndex = function (nums) {
	let resultedIndex = -1;
	for (let index = 0; index < nums.length; index++) {
		const fisrtHalf = nums.slice(0, index).reduce((a, b) => a + b, 0);
		const secondHalf = nums.slice(index + 1).reduce((a, b) => a + b, 0);
		if (fisrtHalf === secondHalf) {
			resultedIndex = index;
			break;
		}
	}
	return resultedIndex;
};

console.log(pivotIndex(testArray));
console.log(pivotIndex(testArray2));
console.log(pivotIndex(testArray3));
console.log(pivotIndex(testArray4));
