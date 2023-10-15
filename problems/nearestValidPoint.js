const testX = 3;
const testY = 4;
const testPoints = [
	[1, 2],
	[3, 1],
	[2, 4],
	[2, 3],
	[4, 4],
];

var nearestValidPoint = function (x, y, points) {
	let leadingManhattanDistance = {
		value: Math.pow(10, 1000),
		index: 0,
	};
	points.forEach((element, index) => {
		if (element[0] == x || element[1] == y) {
			let currentManhattanDistance = manhattanDistance([x, y], points[index]);
			if (currentManhattanDistance < leadingManhattanDistance.value) {
				leadingManhattanDistance.value = currentManhattanDistance;
				leadingManhattanDistance.index = index;
			}
		}
	});
	if (leadingManhattanDistance.value === Infinity) {
		return -1;
	}
	return leadingManhattanDistance.index;
};

function manhattanDistance(cordinatesX1, coordinateX2) {
	return Math.abs(cordinatesX1[0] - coordinateX2[0]) + Math.abs(cordinatesX1[1] - coordinateX2[1]);
}

console.log(nearestValidPoint(testX, testY, testPoints));
