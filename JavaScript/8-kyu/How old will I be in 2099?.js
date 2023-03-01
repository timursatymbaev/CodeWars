function calculateAge(yearOfBirth, yearToCount) {
  const age = yearToCount - yearOfBirth;
  if (age > 0) {
    return `You are ${age} ${age === 1 ? "year" : "years"} old.`;
  } else if (age < 0) {
    return `You will be born in ${-age} ${-age === 1 ? "year" : "years"}.`;
  } else {
    return "You were born this very year!";
  }
}
