function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let northSouth = 0;
  let eastWest = 0;
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === 'n') {
      northSouth++;
    } else if (walk[i] === 's') {
      northSouth--;
    } else if (walk[i] === 'e') {
      eastWest++;
    } else if (walk[i] === 'w') {
      eastWest--;
    }
  }

  return northSouth === 0 && eastWest === 0;
}
