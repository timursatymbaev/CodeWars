function whatCentury(year)
{
  const centuryNum = Math.ceil(parseInt(year) / 100);
  const lastTwoDigits = centuryNum % 100;
  const suffix =
    lastTwoDigits >= 11 && lastTwoDigits <= 13
      ? "th"
      : lastTwoDigits % 10 === 1
      ? "st"
      : lastTwoDigits % 10 === 2
      ? "nd"
      : lastTwoDigits % 10 === 3
      ? "rd"
      : "th";
  return centuryNum + suffix;
}
