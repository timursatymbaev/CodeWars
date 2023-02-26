const check = (a, x) => {
  if (typeof x === 'string') {
    return a.includes(x);
  } else if (typeof x === 'number') {
    return a.includes(x);
  } else {
    return false;
  }
}
