function binaryAgent(str) {
  var newString = str.split(" ");
  var finalString = [];

  for (var i = 0; i < newString.length; i++) {
    finalString.push(String.fromCharCode(parseInt(newString[i], 2)))
  }
  return finalString.join("");
}
