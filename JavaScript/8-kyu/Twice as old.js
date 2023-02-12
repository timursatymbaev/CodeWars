function twiceAsOld(dadYearsOld, sonYearsOld) {
  const twiceSonAge = sonYearsOld * 2;
  const yearsAgo = Math.abs(dadYearsOld - twiceSonAge);
  return yearsAgo;
}
