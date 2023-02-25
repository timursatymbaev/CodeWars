function remove(s) {
  if (s.charAt(s.length - 1) === "!") {
    return s.slice(0, -1);
  } else {
    return s;
  }
}
