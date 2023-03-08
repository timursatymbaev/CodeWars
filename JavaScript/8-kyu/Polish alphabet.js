function correctPolishLetters(str) {
  const diacritics = {
    'ą': 'a',
    'ć': 'c',
    'ę': 'e',
    'ł': 'l',
    'ń': 'n',
    'ó': 'o',
    'ś': 's',
    'ź': 'z',
    'ż': 'z'
  };
  return str.replace(/[ąćęłńóśźż]/g, match => diacritics[match]);
}
