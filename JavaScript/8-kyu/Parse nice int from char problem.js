function getAge(inputString) {
  // Extract the first character from the input string
  const ageChar = inputString.charAt(0);
  // Convert the age character to an integer and return it
  return parseInt(ageChar);
}
