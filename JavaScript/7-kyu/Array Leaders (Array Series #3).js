function arrayLeaders(numbers) {
  const leaders = [];
  let sum = 0;
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] > sum) {
      leaders.unshift(numbers[i]);
    }
    sum += numbers[i];
  }
  return leaders;
}
