function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let sum = age1 * age1 + age2 * age2 + age3 * age3 + age4 * age4 + age5 * age5 + age6 * age6 + age7 * age7 + age8 * age8;
  let root = Math.sqrt(sum);
  let result = Math.floor(root / 2);
  return result;
}
