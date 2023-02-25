function findAverage(arr) {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  
  let mean = sum / arr.length;
  
  return mean;
}
