function pair(str) {
  // use a switch statement to pair up DNA with its pair

  var dnaArr = [];
  var len = str.length;
  var find = function(char) {
    switch (char) {
      case "A":
        dnaArr.push(["A", "T"]);
        break;
      case "T":
        dnaArr.push(["T", "A"]);
        break;
      case "G":
        dnaArr.push(["G", "C"]);
        break;
      case "C":
        dnaArr.push(["C", "G"]);
        break;
    }
  };
  for (var i = 0; i < len; i++) {
    find(str[i]);
  }
  return dnaArr;
}

pair("GCG");
