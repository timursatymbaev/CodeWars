function add(num1, num2) {
  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }
  
  let sum = "";
  let carry = 0;
  
  for (let i = num1.length - 1, j = num2.length - 1; i >= 0; i--, j--) {
    let digit1 = parseInt(num1[i]);
    let digit2 = j >= 0 ? parseInt(num2[j]) : 0;
    let digitSum = digit1 + digit2 + carry;
    carry = Math.floor(digitSum / 10);
    sum = (digitSum % 10) + sum;
  }
  
  if (carry > 0) {
    sum = carry + sum;
  }
  
  return sum;
}
