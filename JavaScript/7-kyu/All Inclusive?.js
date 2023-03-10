function containAllRots(strng, arr) {
  if (strng.length === 0 || arr.length === 0) {
    return true;
  }

  const rotations = [strng];
  for (let i = 1; i < strng.length; i++) {
    rotations.push(strng.slice(i) + strng.slice(0, i));
  }

  for (let i = 0; i < rotations.length; i++) {
    if (!arr.includes(rotations[i])) {
      return false;
    }
  }
  
  return true;
}
