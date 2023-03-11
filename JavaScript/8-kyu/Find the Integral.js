function integrate(coefficient, exponent) {
  const newExponent = exponent + 1;
  const newCoefficient = coefficient / newExponent;
  return `${newCoefficient}x^${newExponent}`;
}
