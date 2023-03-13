function movie(card, ticket, perc) {
  let n = 0; // number of times John goes to the cinema
  let costA = 0; // total cost of System A
  let costB = card; // total cost of System B
  let price = ticket; // price of the current ticket in System B
  
  while (Math.ceil(costB) >= costA) {
    n++;
    costA += ticket;
    costB += price;
    price *= perc;
  }
  
  return n - 1;
}
