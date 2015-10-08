function fearNotLetter(str) {
  var len = str.length;
  for (var i = 0; i < len; i++) {
    var code = str.charCodeAt(i);

    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");
