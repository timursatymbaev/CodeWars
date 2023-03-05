function pointsPer48(ppg, mpg) {
  if (ppg === 0 || mpg === 0) {
    return 0;
  }
  const ppgPerMinute = ppg / mpg;
  const ppgPer48 = ppgPerMinute * 48;
  return Math.round(ppgPer48 * 10) / 10;
}
