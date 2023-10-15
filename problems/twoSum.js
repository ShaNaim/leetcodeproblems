const nums = [0, 4, 3, 0];
//[45, 4, 9, 16,19,18,3,2,20, 25,8,23,36,21,44];
const target = 0;

// let sortedList = nums.sort(function(a, b) {
//   return a - b;
// });

//console.log(sortedList)

// let over18 = nums.filter((value) => {if(value <= target)
// {

// }});
// console.log(nums)
// console.log(over18)
let output = [];
for (let x = 0; x < nums.length - 1; x++) {
	for (let y = 1; y < nums.length; y++) {
		if (nums[x] + nums[y] == target) {
			output = [x, y];
			break;
		}
	}
}
console.log(output);

// if(over18[0]==0&&over18[over18.length-1]==target){
//     output.push(0,over18.length-1);
//     break;
// }else{
//     over18.pop();
//}
