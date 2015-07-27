function largestOfFour(arr) {
	var biggest = [];
	var num = 0;
	for (var i in arr) {
		for (var x in arr[i]) {
			if (arr[i][x] > num) {
				num = arr[i][x];
			}
		}
		biggest.push(num);
	}
    return biggest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
