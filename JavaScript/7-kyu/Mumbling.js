const accum = str => str.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');
