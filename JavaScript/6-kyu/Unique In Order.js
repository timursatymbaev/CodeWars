uniqueInOrder = iterable => [...iterable].reduce((acc, val) => acc[acc.length - 1] !== val ? [...acc, val] : acc, [])
