function stray(numbers) {
  for (let num of numbers) {
    if (numbers.indexOf(num) === numbers.lastIndexOf(num)) {
      return num;
    }
  }
}
