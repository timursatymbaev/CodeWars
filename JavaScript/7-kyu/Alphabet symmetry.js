function solve(arr){
  return arr.map(word => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i].toLowerCase().charCodeAt() - 96 === i + 1) {
        count++;
      }
    }
    return count;
  });
}
