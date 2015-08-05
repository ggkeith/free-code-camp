function slasher(arr, howMany) {
  if (howMany >= arr.length) {
    return [];
  } else if (howMany === 0) {
    return arr;
  } else {
    arr.splice(0,howMany);
    return arr;
  }
 
}

slasher([1, 2, 3], 2);