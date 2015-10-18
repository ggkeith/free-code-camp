function every(collection, pre) {
  // Does everyone have one of these?
  var count = 0;

  for (var x in collection) {
    if(collection[x].hasOwnProperty(pre) || collection[x][pre] === pre) {
      count++
    }
  }
  if (count === collection.length) {
     return true;
  } else {
    return false;
  }
}
