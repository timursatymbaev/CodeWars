const findNextSquare = num => {
  let root = Math.sqrt(num);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
};
