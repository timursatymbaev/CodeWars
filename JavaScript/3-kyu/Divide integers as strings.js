function divideStrings(a, b) {
  const dividend = a.split('').map(Number);
  const divisor = b.split('').map(Number);
  let quotient = [];
  let remainder = [];

  for (let i = 0; i < dividend.length; i++) {
    remainder.push(dividend[i]);

    if (compare(remainder, divisor) < 0) {
      quotient.push(0);
      continue;
    }

    let q = 0;
    while (compare(remainder, divisor) >= 0) {
      remainder = subtract(remainder, divisor);
      q++;
    }
    quotient.push(q);
  }

  quotient = removeLeadingZeros(quotient);
  remainder = removeLeadingZeros(remainder);

  if (remainder.length === 0) {
    return [quotient.join(''), '0'];
  }

  return [quotient.join(''), remainder.join('')];
}

function compare(a, b) {
  a = removeLeadingZeros(a);
  b = removeLeadingZeros(b);

  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) return 1;
    if (a[i] < b[i]) return -1;
  }

  return 0;
}

function subtract(a, b) {
  a = [...a];
  b = [...b];
  while (a.length < b.length) a.unshift(0);
  while (b.length < a.length) b.unshift(0);

  let c = [];
  let borrow = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    let d = a[i] - b[i] - borrow;
    if (d < 0) {
      d += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }
    c.unshift(d);
  }

  return removeLeadingZeros(c);
}

function removeLeadingZeros(a) {
  while (a.length > 1 && a[0] === 0) {
    a.shift();
  }
  return a;
}
