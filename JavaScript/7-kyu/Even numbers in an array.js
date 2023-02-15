function evenNumbers(array, number) {
  const evens = array.filter(num => num % 2 === 0);
  return evens.slice(-number);
}
