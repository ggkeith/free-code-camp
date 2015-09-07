function sumAll(arr) {
  var min = Math.min(arr[0],arr[1]);
  var max = Math.max(arr[0],arr[1]);

  return max/2*(max+1)-min/2*(min+1)+min;
}

sumAll([1, 4]);