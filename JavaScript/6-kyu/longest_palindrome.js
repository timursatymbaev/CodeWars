function longestPalindrome(s) {
  if (s.length === 0) {
    return 0;
  }
  
  let longest = 1;
  
  for (let i = 0; i < s.length; i++) {
    // check odd-length palindromes centered at i
    let left = i - 1;
    let right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      longest = Math.max(longest, right - left + 1);
      left--;
      right++;
    }
    
    // check even-length palindromes centered between i and i+1
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      longest = Math.max(longest, right - left + 1);
      left--;
      right++;
    }
  }
  
  return longest;
}
