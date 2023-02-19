function dutyFree(normPrice, discount, hol) {
  const savingsPerBottle = normPrice * discount / 100;
  const bottlesRequired = hol / savingsPerBottle;
  return Math.floor(bottlesRequired);
}
