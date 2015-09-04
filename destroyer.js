function destroyer(arr) {
  var elementDestroy = [];
  
  for (var i = 0; i < arguments.length; i++) {
    elementDestroy.push(arguments[i]);
  }
  
  var toKeep = arguments[0].filter(function(element, index) {
    var toReturn = true;
    
    for (var i = 0; i < elementDestroy.length; i++) {
    if (element === elementDestroy[i]) {
      toReturn = false;
      }
    }
    return toReturn;
  });
  return toKeep;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);