function partition(items, left, right) {
	let pivot = items[Math.floor((right + left) / 2)],
		i = left,
		j = right;
	while (i <= j) {
		while (items[i] < pivot) {
			i++;
		}
		while (items[j] > pivot) {
			j--;
		}
		if (i <= j) {
			[items[i], items[j]] = [items[j], items[i]];
			i++;
			j--;
		}
	}
	return i;
}

function quickSort(items, left, right) {
	let index;

	if (items.length > 1) {
		index = partition(items, left, right);
		if (left < index - 1) {
			quickSort(items, left, index - 1);
		}
		if (index < right) {
			quickSort(items, index, right);
		}
	}
	return items;
}

var averageWIthQuickSort = function (salary) {
	const sortedList = quickSort(salary, 0, salary.length - 1).slice(1, salary.length - 1);
	return sortedList.reduce((a, b) => a + b, 0) / sortedList.length;
};

var average = function (salary) {
	salary.sort((a, b) => a - b).pop();
	salary.reverse().pop();

	let sum = salary.reduce((sum, item) => sum + item, 0);
	return sum / salary.length;
};

console.log(average([25000, 48000, 57000, 86000, 33000, 10000, 42000, 3000, 54000, 29000, 79000, 40000]));
