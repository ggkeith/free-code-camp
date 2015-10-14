function smallestCommons(arr) {
  //sort from smallest to largest
  arr.sort(function(a, b) {
    return b - a;
  });

  // create new array and populate with values
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }


  var num = 0;
  var newNum = 1;
  var x;

  // run code while n is not the same as the array length.
  do {
    num = newArr[0] * newNum * newArr[1];
    for (x = 2; x < newArr.length; x++) {
      if (num % newArr[x] !== 0) {
        break;
      }
    }

    newNum++;
  } while (x !== newArr.length);

  return num;
}


smallestCommons([1,5]);
