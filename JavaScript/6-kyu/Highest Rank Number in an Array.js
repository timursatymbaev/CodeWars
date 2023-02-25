function highestRank(arr){
  const count = {};
  let highest = -Infinity;
  let mostFrequent;
  
  arr.forEach(num => {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > highest || (count[num] === highest && num > mostFrequent)) {
      highest = count[num];
      mostFrequent = num;
    }
  });
  
  return mostFrequent;
}
