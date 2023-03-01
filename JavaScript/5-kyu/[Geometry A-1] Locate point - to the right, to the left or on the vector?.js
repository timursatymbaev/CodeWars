function pointVsVector(point, vector) {
  const [x, y] = point;
  const [[x1, y1], [x2, y2]] = vector;

  const crossProduct = (x - x1) * (y2 - y1) - (y - y1) * (x2 - x1);

  if (crossProduct < 0) {
    return -1;
  } else if (crossProduct > 0) {
    return 1;
  } else {
    return 0;
  }
}
