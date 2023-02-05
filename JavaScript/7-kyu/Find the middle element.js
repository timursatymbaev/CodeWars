function gimme(triplet) {
  let sortedArray = [...triplet].sort((a, b) => a - b);
  let middleIndex = triplet.indexOf(sortedArray[1]);
  return middleIndex;
}
