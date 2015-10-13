function sumFibs(num) {
  var x = 0;
  var y = 1;
  var final = 0;

  while (y <= num) {
    if (y % 2 !== 0) {
      final += y;
    }

    y += x;
    x = y - x;
  }
  return final;
}

sumFibs(1000);
