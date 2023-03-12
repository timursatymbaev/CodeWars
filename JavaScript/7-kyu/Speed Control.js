function gps(s, x) {
  if (x.length <= 1) {
    return 0;
  }
  let speeds = [];
  for (let i = 0; i < x.length - 1; i++) {
    let delta_distance = x[i + 1] - x[i];
    speeds.push(Math.floor((3600 * delta_distance) / s));
  }
  return Math.max(...speeds);
}
