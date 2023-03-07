function solve(s){
  const counts = [0, 0, 0, 0];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (/[A-Z]/.test(char)) {
      counts[0]++;
    } else if (/[a-z]/.test(char)) {
      counts[1]++;
    } else if (/\d/.test(char)) {
      counts[2]++;
    } else {
      counts[3]++;
    }
  }

  return counts;
}
