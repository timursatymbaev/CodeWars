function multiplyAll(arr) {
  return function (n) {
    return arr.map(function (x) {
      return x * n;
    });
  };
}
