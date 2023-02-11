function high(x) {
  const words = x.split(' ');
  let maxScore = 0;
  let maxWord = '';
  for (let i = 0; i < words.length; i++) {
    const score = words[i].split('').reduce((acc, curr) => acc + curr.charCodeAt(0) - 96, 0);
    if (score > maxScore) {
      maxScore = score;
      maxWord = words[i];
    }
  }
  return maxWord;
}
