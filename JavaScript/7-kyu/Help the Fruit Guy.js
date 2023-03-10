function removeRotten(fruitBasket) {
  if (!fruitBasket || fruitBasket.length === 0) {
    return [];
  }
  
  return fruitBasket.map(fruit => {
    if (fruit.toLowerCase().startsWith('rotten')) {
      return fruit.slice(6).toLowerCase();
    } else {
      return fruit.toLowerCase();
    }
  });
}

