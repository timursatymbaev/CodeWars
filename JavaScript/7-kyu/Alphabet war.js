function alphabetWar(fight) {
  let leftPower = 0;
  let rightPower = 0;

  for (let i = 0; i < fight.length; i++) {
    const letter = fight[i];
    switch (letter) {
      case 'w':
        leftPower += 4;
        break;
      case 'p':
        leftPower += 3;
        break;
      case 'b':
        leftPower += 2;
        break;
      case 's':
        leftPower += 1;
        break;
      case 'm':
        rightPower += 4;
        break;
      case 'q':
        rightPower += 3;
        break;
      case 'd':
        rightPower += 2;
        break;
      case 'z':
        rightPower += 1;
        break;
    }
  }

  if (leftPower > rightPower) {
    return "Left side wins!";
  } else if (rightPower > leftPower) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}
