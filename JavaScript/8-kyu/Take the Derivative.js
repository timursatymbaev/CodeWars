function derive(coefficient, exponent) {
  const product = coefficient * exponent;
  const newExponent = exponent - 1;
  return `${product}x^${newExponent}`;
}
