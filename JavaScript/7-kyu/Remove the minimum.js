function removeSmallest(numbers) {
  if (numbers.length === 0) {
      return [];
  }

  const indexOfSmallest = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfSmallest), ...numbers.slice(indexOfSmallest + 1)];
}
