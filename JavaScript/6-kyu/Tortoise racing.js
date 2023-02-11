function race(v1, v2, g) {
  if (v1 >= v2) {
    return null; // B can never catch A
  }
  const timeInSeconds = Math.floor(g / (v2 - v1) * 3600);
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
  const seconds = timeInSeconds - hours * 3600 - minutes * 60;
  return [hours, minutes, seconds];
}
