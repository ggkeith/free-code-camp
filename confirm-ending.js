function end(str, target) {
    var targetLength = -Math.abs(target.length);
    var substrTarget = str.substr(targetLength);

	if (target === substrTarget) {
		return true;
	} else {
		return false;
	}


}

end('Bastian', 'n');
