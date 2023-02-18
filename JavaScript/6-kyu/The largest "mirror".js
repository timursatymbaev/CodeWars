const maxMirror = arr => {
  const str = arr => arr.join('');
  for (let w = arr.length; w > 0; w--) {
    const bag = new Set();
    for (let i = 0; i + w <= arr.length; i++) {
      bag.add(str(arr.slice(i, i + w)));
    }
    for (let i = 0; i + w <= arr.length; i++) {
      if (bag.has(str(arr.slice(i, i + w).reverse()))) {
        return w == 1 ? 0 : w;
      }
    }
  }
  return 0;
}
