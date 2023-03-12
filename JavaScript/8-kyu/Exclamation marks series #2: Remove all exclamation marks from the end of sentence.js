function remove(s){
  // Loop through string from end to start
  for (let i = s.length - 1; i >= 0; i--) {
    // If character is not an exclamation mark, break loop
    if (s[i] !== "!") {
      break;
    }
    // Otherwise, remove exclamation mark from string
    s = s.slice(0, i);
  }
  return s;
}
