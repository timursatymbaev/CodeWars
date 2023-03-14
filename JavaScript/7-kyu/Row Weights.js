function rowWeights(array){
  let even = [];
  let odd = [];
  for (let i=0; i<array.length; i++) {
    if (i % 2 == 0) {
      even.push(array[i]);
    } else {
      odd.push(array[i]);
    }
  }
  return [even.reduce((a,b) => a+b, 0), odd.reduce((a,b) => a+b, 0)];
}
