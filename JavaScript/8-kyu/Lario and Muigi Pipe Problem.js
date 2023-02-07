function pipeFix(numbers) {
  if (!numbers || numbers.length === 0) return [];
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  let fixedPipes = [];
  for (let i = min; i <= max; i++) {
    fixedPipes.push(i);
  }
  return fixedPipes;
}
