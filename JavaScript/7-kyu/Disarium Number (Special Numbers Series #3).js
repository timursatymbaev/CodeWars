function disariumNumber(number) {
  let numStr = String(number);
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    sum += Math.pow(parseInt(numStr[i]), i + 1);
  }
  return sum === number ? 'Disarium !!' : 'Not !!';
}
