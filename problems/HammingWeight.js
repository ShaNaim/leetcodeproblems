const testString = 234;
var hammingWeight = function (n) {
	return n.toString(2).replaceAll("0", "").length;
};

var subtractProductAndSum = function (n) {
	const arrayOfn = n.toString().split("");
	let productOfn = 1;
	let sumOfn = 0;
	arrayOfn.forEach((element) => {
		productOfn = productOfn * Number(element);
		sumOfn = sumOfn + Number(element);
	});
	return productOfn - sumOfn;
};
console.log(subtractProductAndSum(testString));
