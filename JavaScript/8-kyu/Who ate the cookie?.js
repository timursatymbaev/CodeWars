function cookie(input) {
  if (typeof input === 'string') {
    return "Who ate the last cookie? It was Zach!";
  } else if (typeof input === 'number') {
    return "Who ate the last cookie? It was Monica!";
  } else {
    return "Who ate the last cookie? It was the dog!";
  }
}
