function expandedForm(num) {
  let numString = num.toString();
  let expandedForm = [];
  let zeroCount = numString.length - 1;
  
  for (let i = 0; i < numString.length; i++) {
    let currentDigit = numString[i];
    if (currentDigit !== "0") {
      expandedForm.push(currentDigit + "0".repeat(zeroCount));
    }
      zeroCount--;
  }
  
  return expandedForm.join(" + ");
}
