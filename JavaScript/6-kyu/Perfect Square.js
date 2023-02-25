function perfectSquare(str) {
  const rows = str.trim().split('\n');
  const width = rows[0].length; 
  if (rows.length !== width) {
    return false;
  }
  for (let row of rows) {
    if (row.length !== width || !/^[\.\n]+$/.test(row)) {
      return false;
    }
  }
  return true;
}
