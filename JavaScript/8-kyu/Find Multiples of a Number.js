const findMultiples = (integer, limit) => Array.from({length: Math.floor(limit / integer)}, (_, i) => (i + 1) * integer).filter(x => x <= limit);
