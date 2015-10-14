function drop(arr, func) {
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
