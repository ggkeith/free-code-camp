function convert(str) {
  // split str into an array
  var arr = str.split("");
  // use loop to iterate through array
  // use switch statement to find and replace html chars
  for (var i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "<":
        arr[i] = "&lt;";
        break;
      case ">":
        arr[i] = "&gt;";
        break;
      case "&":
        arr[i] = "&amp;";
        break;
      case "'":
        arr[i] = "&apos;";
        break;
      case '"':
        arr[i] = '&quot;';
        break;
    }

  }
  // rejoin arr into a string and return
  return arr.join("");
}
