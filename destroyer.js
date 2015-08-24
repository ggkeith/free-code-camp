function destroyer(arr) {
  var destroy = [];
	for (var i = 0; i < arguments.length; i += 1) {
		destroy.push(arguments[i]);
	}
	function listCheck (search) {
		for (var j = 0; j < destroy.length; j += 1) {
			if(arr[search] === destroy[j]) {
				return true;
			} else {
				return false;
			}
		}
	}
  return arr.filter(listCheck);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
