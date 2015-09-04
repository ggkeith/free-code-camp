function where(arr, num) {
  var i = 0;
  while (i < arr.length && num > arr[i]) {
    i++;
  }
  return i;
}

where([40, 60], 50);