arrayDiff = (a, b) => a.length === 0 ? [] : [...a, ...b].filter(i => !a.includes(i) || !b.includes(i))
