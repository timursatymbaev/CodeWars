function dataReverse(data) {
  const reversedChunks = [];
  for (let i = 0; i < data.length; i += 8) {
    const chunk = data.slice(i, i + 8);
    reversedChunks.unshift(chunk);
  }
  return [].concat(...reversedChunks);
}
