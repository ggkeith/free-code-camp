function end(str, target) {
    var newStr = str.split(" ").slice(-1);
    //var targetLength = target.length;
   
    var lastStr = str.substr(str - 1);
    
	if (target === newStr) {
		return true;
	} else {
		return false;
	}
  
  
}

end('Bastian', 'n');