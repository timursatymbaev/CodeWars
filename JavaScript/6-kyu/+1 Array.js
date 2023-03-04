function upArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || arr[i] < 0 || arr[i] > 9) {
      return null;
    }
  }

  let carry = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let sum = arr[i] + carry;
    arr[i] = sum % 10;
    carry = Math.floor(sum / 10);
    if (carry === 0) {
      break;
    }
  }

  if (carry > 0) {
    arr.unshift(carry);
  }

  return arr;
}
