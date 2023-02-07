const sequenceSum = (begin, end, step) => begin > end ? 0 : Array.from({ length: Math.floor((end - begin) / step) + 1 }, (_, i) => begin + i * step).reduce((sum, curr) => sum + curr, 0);
