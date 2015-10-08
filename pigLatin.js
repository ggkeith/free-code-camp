function translate(str) {
  var vowEnd = "way";
  var consEnd = "ay";
  var pigLatin = "";
  var regex = /[aeiou]/gi;
  var numVowels = str.indexOf(str.match(regex)[0]);
  var newStr = str.split("");
  
  if (str[0] === "a" || str[0] === "e" || str[0] === "i" || str[0] === "o" || str[0] === "u") {
    return str + vowEnd;
  } else {
    var removed = str.substr(0, numVowels);
    var shortStr = str.slice(numVowels);
    pigLatin = shortStr.concat(removed) + consEnd;
    return pigLatin;
  }
}

