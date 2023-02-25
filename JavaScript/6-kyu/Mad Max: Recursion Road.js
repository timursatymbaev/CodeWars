const max = ([first, ...rest]) => {
  if (rest.length === 0) {
    return first || -Infinity;
  } else {
    const maxRest = max(rest);
    return first >= maxRest ? first : maxRest;
  }
};
