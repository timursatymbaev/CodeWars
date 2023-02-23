var maxSequence = function(arr){
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum < 0) {
      currentSum = 0;
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}
