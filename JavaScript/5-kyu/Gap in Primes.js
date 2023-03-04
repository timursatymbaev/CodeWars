function gap(g, m, n) {
  let lastPrime = 0;
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (i - lastPrime === g) {
        return [lastPrime, i];
      } else {
        lastPrime = i;
      }
    }
  }
  return null;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
