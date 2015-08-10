function bouncer(arr) {
  var newArr = arr.filter(Boolean);
  return newArr;
}

bouncer([7, 'ate', '', false, 9]);
