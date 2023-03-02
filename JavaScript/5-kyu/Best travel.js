function chooseBestSum(t, k, ls) {
  const combinations = getCombinations(ls, k);

  let maxSum = null;

  for (let i = 0; i < combinations.length; i++) {
    const sum = combinations[i].reduce((acc, val) => acc + val, 0);
    if (sum <= t && (maxSum === null || sum > maxSum)) {
      maxSum = sum;
    }
  }

  return maxSum !== null ? maxSum : null;
}

function getCombinations(ls, k) {
  const combinations = [];
  const combination = Array(k).fill(null);
  const n = ls.length;

  function combine(start, index) {
    if (index === k) {
      combinations.push([...combination]);
    } else {
      for (let i = start; i < n; i++) {
        combination[index] = ls[i];
        combine(i + 1, index + 1);
      }
    }
  }

  combine(0, 0);
  return combinations;
}
