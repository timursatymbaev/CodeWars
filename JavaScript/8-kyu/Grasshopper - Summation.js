summation = num => Array.from({length: num + 1}, (_, i) => i).reduce((sum, i) => sum + i, 0)
