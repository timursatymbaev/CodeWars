function numberToPower(number, power) {
  if (power === 0) {
    return 1;
  }
  let result = number;
  for (let i = 1; i < power; i++) {
    result *= number;
  }
  return result;
}
