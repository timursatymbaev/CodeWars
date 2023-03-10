function distanceBetweenPoints(a, b) {
  if (typeof a.x !== 'number' || typeof a.y !== 'number' || typeof b.x !== 'number' || typeof b.y !== 'number') {
    return undefined;
  }
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
}
