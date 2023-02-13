function titleCase(title, minorWords) {
  if (title === '') {
    return '';
  }
  
  var minorWordsArr = [];
  if (typeof minorWords !== 'undefined' && minorWords !== '') {
    minorWordsArr = minorWords.toLowerCase().split(' ');
  }
  
  var titleArr = title.toLowerCase().split(' ');
  for (var i = 0; i < titleArr.length; i++) {
    var word = titleArr[i];
    if (word !== '' && (i === 0 || minorWordsArr.indexOf(word) === -1)) {
      titleArr[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
  
  return titleArr.join(' ');
}
