var countOdds = function (low, high) {
	let oddCount = 0;
	for (let index = low; index <= high; index++) {
		if (index % 2 !== 0) {
			oddCount++;
		}
	}
	return oddCount;
};
console.log(countOdds(3, 7));
