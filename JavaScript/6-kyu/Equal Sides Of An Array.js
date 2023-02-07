const findEvenIndex = arr => arr.findIndex((_, i) => arr.slice(0, i).reduce((a, b) => a + b, 0) === arr.slice(i + 1).reduce((a, b) => a + b, 0));
