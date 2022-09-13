const testString = "ahbgdcd";
const targetString = "acb";
var isSubsequence = function (s, t) {
	if (s === "") return true;
	if (Array.from(s)[0] !== Array.from(t)[0]) return false;
	let resultIndex = 0;
	let result = true;
	let targetArray = s.split("");
	targetArray.forEach((element) => {
		let lastIndex = t.indexOf(element);
		if (lastIndex === -1) {
			result = false;
			return;
		}
		if (lastIndex < resultIndex) {
			result = false;
			return;
		}
		resultIndex = lastIndex;
	});
	return result;
};

console.log(isSubsequence(targetString, testString));
