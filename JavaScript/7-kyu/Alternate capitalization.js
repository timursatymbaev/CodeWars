function capitalize(s) {
  const even = s.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char).join('');
  const odd = s.split('').map((char, index) => index % 2 !== 0 ? char.toUpperCase() : char).join('');
  return [even, odd];
};
