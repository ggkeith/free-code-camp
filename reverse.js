function reverseString(str) {
	revStr = str.split("").reverse().join();
	revStr = revStr.join("");
  return revStr;
}

reverseString('hello');