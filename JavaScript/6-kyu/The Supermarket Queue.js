function queueTime(customers, n) {
  const tills = new Array(n).fill(0);
  for (let i = 0; i < customers.length; i++) {
    tills[tills.indexOf(Math.min(...tills))] += customers[i];
  }
  return Math.max(...tills);
}
