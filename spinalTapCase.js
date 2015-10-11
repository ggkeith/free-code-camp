function spinalCase(str) {
  // make str all lower case
  // split str into an array
  // make a regex that removes "_" and "-"
  // join array with "-" as the joiner
  var regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.replace(regex, '-').toLowerCase()
}
