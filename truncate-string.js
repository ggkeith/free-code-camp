function truncate(str, num) {
  var truncStr = str.slice(0, num - 3) + "...";

  if (num >= str.length) {
    return str;
  } else {
    return truncStr;
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
