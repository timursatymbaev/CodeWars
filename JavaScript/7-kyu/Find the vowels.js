function vowelIndices(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const indices = [];

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      indices.push(i + 1);
    }
  }

  return indices;
}
