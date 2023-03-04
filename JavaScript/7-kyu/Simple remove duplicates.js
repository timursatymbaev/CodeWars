function solve(arr) {
  return arr.filter((elem, index, array) => {
    return index === array.lastIndexOf(elem);
  });
}
