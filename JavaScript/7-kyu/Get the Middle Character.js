function getMiddle(s) {
  let length = s.length;
  let middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) {
    return s.substring(middleIndex - 1, middleIndex + 1);
  } else {
    return s.charAt(middleIndex);
  }
}
