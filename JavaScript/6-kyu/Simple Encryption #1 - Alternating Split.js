function encrypt(s, n) {
  if (!s || n <= 0) return s; // Return the original string if invalid input
  for (let i = 0; i < n; i++) {
    let oddChars = "";
    let evenChars = "";
    for (let j = 0; j < s.length; j++) {
      if (j % 2 === 0) {
        evenChars += s[j];
      } else {
        oddChars += s[j];
      }
    }
    s = oddChars + evenChars; // Concatenate odd and even characters
  }
  return s;
}

function decrypt(s, n) {
  if (!s || n <= 0) return s; // Return the original string if invalid input
  const mid = Math.floor(s.length / 2);
  for (let i = 0; i < n; i++) {
    let chars = "";
    for (let j = 0; j < mid; j++) {
      chars += s[mid + j] + s[j]; // Alternate characters from mid to end and from start to mid
    }
    if (s.length % 2 === 1) chars += s[s.length - 1]; // Add last character if string length is odd
    s = chars;
  }
  return s;
}
