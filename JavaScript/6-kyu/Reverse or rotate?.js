function revrot(str, sz) {
  if (sz <= 0 || str === '' || sz > str.length) {
    return '';
  }
  
  let chunks = [];
  
  for (let i = 0; i < str.length; i += sz) {
    const chunk = str.substr(i, sz);
    
    if (chunk.length === sz) {
      const sum = chunk.split('').reduce((acc, cur) => acc + Math.pow(parseInt(cur), 3), 0);
      
      if (sum % 2 === 0) {
        chunks.push(chunk.split('').reverse().join(''));
      } else {
        chunks.push(chunk.substring(1) + chunk[0]);
      }
    }
  }
  
  return chunks.join('');
}
