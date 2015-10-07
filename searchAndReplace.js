function myReplace(str, before, after) {
  
  
  var upperBefore = before[0].toUpperCase();
  var upperAfter = after[0].toUpperCase();
  var newStr = str.replace(before, after);
  var word = after.substr(1);
  var combined = upperAfter.concat(word);
  var upperString = str.replace(before, combined);

  if (before[0] === upperBefore) {
    return upperString;
  } else {
    return newStr;
  }
}