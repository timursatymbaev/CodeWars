factorial = n => n < 0 || n > 12 ? (() => { throw RangeError })() : n === 0 ? 1 : n * factorial(n - 1)
