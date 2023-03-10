function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const blueLeft = blueStart - bluePulled;
  const redLeft = redStart - redPulled;
  const totalLeft = blueLeft + redLeft;
  return blueLeft / totalLeft;
}
