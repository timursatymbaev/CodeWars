const binaryArrayToNumber = arr => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result * 2 + arr[i];
  }
  return result;
};
