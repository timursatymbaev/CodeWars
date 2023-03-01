function thirt(n) {
  const pattern = [1, 10, 9, 12, 3, 4];
  let sum = 0;
  let index = 0;

  for (let i = n.toString().length - 1; i >= 0; i--) {
    const digit = parseInt(n.toString().charAt(i), 10);
    sum += digit * pattern[index % pattern.length];
    index++;
  }

  return sum === n ? sum : thirt(sum);
}
