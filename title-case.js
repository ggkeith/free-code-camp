function titleCase(str) {
	var arr = str.split(" ");
	var text = "";
	for (var i = 0; i < arr.length; i++) {
		text += arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase() + " ";
	}
  	return text.trim();
}

titleCase("I'm a little tea pot");