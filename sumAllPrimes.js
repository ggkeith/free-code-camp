function sumPrimes(num) {
  var res = 0;


  function getPrimes(max) {
    var sieve = [];

    var primes = [];
    for (var i = 2; i <= max; ++i) {
      if (!sieve[i]) {

        primes.push(i);
        for (var j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }


  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  return res;
}
