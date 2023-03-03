function selReverse(arr, length) {
  if (length === 0) {
    return arr;
  }

  var result = [];

  for (var i = 0; i < arr.length; i += length) {
    var chunk = arr.slice(i, i + length);
    if (chunk.length < length) {
      result.push.apply(result, chunk.reverse());
    } else {
      result.push.apply(result, chunk.reverse());
    }
  }

  return result;
}
