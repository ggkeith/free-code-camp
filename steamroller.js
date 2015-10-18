function steamroller(arr) {
  // I'm a steamroller, baby

  var finalArray = [];

  var flat = function (arg) {
    if (!Array.isArray(arg)) {
      finalArray.push(arg);
    } else {
      for (var a in arg) {
        flat(arg[a]);
      }
    }
  };
  arr.forEach(flat);
  return finalArray;
}

steamroller([1, [2], [3, [[4]]]]);
