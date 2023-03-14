function splitAndMerge(str, sep) {
  // Split the string into words by spaces
  const words = str.split(" ");
  // Split each word into separate characters, join with separator
  const joinedWords = words.map(word => word.split("").join(sep));
  // Join all the resulting "words" back into a sentence with spaces
  return joinedWords.join(" ");
}
