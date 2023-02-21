var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let sum = 0;
    let input = '';
    if (count === 0) return '0=0'
    if (count < 0) return `${count}<0`
    for (let i = 0; i <= count; i++) {
      if (i == count) {
        input += String(i);
      } else {
        input += String(i) + '+';
      }
      sum = sum + i;
    }
    return input + ' = ' + sum;
  };  

  return SequenceSum;

})();
