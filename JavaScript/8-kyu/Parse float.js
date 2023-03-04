function parseF(input) {
  if (typeof input === "number") {
    return input;
  } else if (typeof input === "string") {
    const parsed = parseFloat(input);
    if (isNaN(parsed)) {
      return null;
    }
    return parsed;
  } else if (Array.isArray(input)) {
    return null;
  } else if (typeof input === "object") {
    const parsed = parseFloat(input.valueOf());
    if (isNaN(parsed)) {
      return null;
    }
    return parsed;
  } else {
    return null;
  }
}
