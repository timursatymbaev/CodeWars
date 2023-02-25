Array.prototype.square = function() {
  return this.map(num => num ** 2);
};

Array.prototype.cube = function() {
  return this.map(num => num ** 3);
};

Array.prototype.average = function() {
  if (this.length === 0) {
    return NaN;
  }
  const sum = this.reduce((acc, num) => acc + num, 0);
  return sum / this.length;
};

Array.prototype.sum = function() {
  return this.reduce((acc, num) => acc + num, 0);
};

Array.prototype.even = function() {
  return this.filter(num => num % 2 === 0);
};

Array.prototype.odd = function() {
  return this.filter(num => num % 2 === 1);
};
