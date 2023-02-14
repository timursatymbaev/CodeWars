function findOdd(A) {
  let count = {};
  for (let i = 0; i < A.length; i++) {
    if (count[A[i]] === undefined) {
      count[A[i]] = 1;
    } else {
      count[A[i]]++;
    }
  }
  for (let num in count) {
    if (count[num] % 2 !== 0) {
      return parseInt(num);
    }
  }
}
