function deriv(f) {
  return function(x) {
    const h = 0.0001;
    const f1 = f(x + h);
    const f2 = f(x - h);
    return (f1 - f2) / (2 * h);
  };
}
