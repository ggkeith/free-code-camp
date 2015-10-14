function find(arr, func) {
  var newArr = arr.filter(func);
  return newArr[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
