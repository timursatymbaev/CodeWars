function longestConsec(strarr, k) {
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) {
    return "";
  }
  let longest = "";
  for (let i = 0; i <= n - k; i++) {
    let current = strarr.slice(i, i + k).join("");
    if (current.length > longest.length) {
      longest = current;
    }
  }
  return longest;
}
