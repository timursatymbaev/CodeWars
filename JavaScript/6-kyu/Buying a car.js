function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
  let currentSavings = 0;
  let currentMonth = 0;
  let currentPriceOld = startPriceOld;
  let currentPriceNew = startPriceNew;

  while (currentSavings + currentPriceOld < currentPriceNew) {
    currentMonth++;
    if (currentMonth % 2 === 0) {
      percentLossByMonth += 0.5;
    }
    currentPriceOld -= currentPriceOld * (percentLossByMonth / 100);
    currentPriceNew -= currentPriceNew * (percentLossByMonth / 100);
    currentSavings += savingperMonth;
  }

  let moneyLeft = currentSavings + currentPriceOld - currentPriceNew;
  return [currentMonth, Math.round(moneyLeft)];
}
