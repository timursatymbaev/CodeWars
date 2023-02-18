const findDifference = (a, b) => Math.abs(a.reduce((acc, val) => acc * val, 1) - b.reduce((acc, val) => acc * val, 1));
