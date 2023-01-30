countPositivesSumNegatives = input => !input || input.length === 0 ? [] : input.reduce((a, b) => [(b > 0) ? a[0] += 1 : a[0], (b < 0) ? a[1] += b : a[1]], [0, 0])
