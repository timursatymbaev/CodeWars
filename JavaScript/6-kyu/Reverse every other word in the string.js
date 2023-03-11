function reverse(str) {
  const words = str.trim().split(/\s+/);

  for (let i = 1; i < words.length; i += 2) {
    words[i] = words[i].split('').reverse().join('');
  }

  return words.join(' ');
}
