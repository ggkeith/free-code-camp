function chunk(arr, size) {
  var chunks = [];
  var i = 0;
  var x = arr.length;
  
  while (i < x) {
    chunks.push(arr.slice(i, i += size));
  }
  return chunks;
}

chunk(['a', 'b', 'c', 'd'], 2);