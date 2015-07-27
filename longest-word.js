function findLongestWord(str) {
	var arr = str.split(" ");
	var wordNum = 0;
	for (var i in arr) {
		if (arr[i].length > wordNum) {
			wordNum = arr[i].length;
		}
	}

  return wordNum;
}

findLongestWord('The quick brown fox jumped over the lazy dog');