function order(words) {
  if (!words) return '';
  return words.split(' ').sort((a, b) => {
      let numA = parseInt(a.match(/\d+/g)[0]);
      let numB = parseInt(b.match(/\d+/g)[0]);
      return numA - numB;
  }).join(' ');
}
