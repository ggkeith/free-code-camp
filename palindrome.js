function palindrome(str) {
	var newArr = str.split("");
	var revArr = newArr.reverse();
	var newStr = revArr.join("");
	if (newStr === str)
	{
		return true;
	}
	else
	{
		return false;
	}
}



palindrome("eye");
