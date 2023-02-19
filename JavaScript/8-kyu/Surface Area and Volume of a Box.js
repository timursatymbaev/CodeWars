function getSize(width, height, depth) {
  let area = 2 * (depth * width + depth * height + width * height);
  let volume = depth * width * height;
  return [area, volume];
}
