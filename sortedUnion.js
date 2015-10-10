function unite(arr1, arr2, arr3) {
  var lastArr = [];
  
  for (var i = 0; i < arguments.length; i++) {
    var arrArg = arguments[i];
    
    for (var x = 0; x < arrArg.length; x++) {
      var index = arrArg[x];
      
      if (lastArr.indexOf(index) < 0) {
        lastArr.push(index);
      }
    }
  }
  return lastArr;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);