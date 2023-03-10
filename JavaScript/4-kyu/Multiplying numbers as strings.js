function multiply(a, b) {
  const product = [];
  for (let i = 0; i < a.length + b.length; i++) {
    product[i] = 0;
  }
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      const digitProduct = parseInt(a[i]) * parseInt(b[j]);
      const sum = product[i + j + 1] + digitProduct;
      product[i + j] += Math.floor(sum / 10);
      product[i + j + 1] = sum % 10;
    }
  }
  const result = product.join('').replace(/^0+(?!$)/, '');
  return result === '' ? '0' : result;
}
