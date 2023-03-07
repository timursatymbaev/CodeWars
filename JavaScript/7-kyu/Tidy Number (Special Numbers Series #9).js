function tidyNumber(n){
  const digits = n.toString().split('');
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] < digits[i - 1]) {
      return false;
    }
  }
  return true;
}
