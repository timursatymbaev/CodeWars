var isAnagram = function(test, original) {
  const lowerCaseTest = test.toLowerCase();
  const lowerCaseOriginal = original.toLowerCase();

  if (lowerCaseTest.length !== lowerCaseOriginal.length) {
    return false;
  }

  const sortedTest = lowerCaseTest.split('').sort().join('');
  const sortedOriginal = lowerCaseOriginal.split('').sort().join('');

  return sortedTest === sortedOriginal;
};
