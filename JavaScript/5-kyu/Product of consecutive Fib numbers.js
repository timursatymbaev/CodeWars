function productFib(prod) {
  let a = 0;
  let b = 1;
  while (a * b < prod) {
    const c = a + b;
    a = b;
    b = c;
  }
  return [a, b, a * b === prod];
}
