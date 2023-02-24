function sumPairs(ints, s) {
  const seen = new Set();
  for (let i = 0; i < ints.length; i++) {
    const complement = s - ints[i];
    if (seen.has(complement)) {
      return [complement, ints[i]];
    }
    seen.add(ints[i]);
  }
  return undefined;
}
