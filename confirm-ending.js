function end(str, target) {
	var newStr = str.split("");
    var lastStr = str.substr(newStr.length - 1);
  
	if (target == lastStr) {
		return true;
	} else {
		return false;
	}


    console.log(newStr);
}

end('He has to give me a new name', 'name');