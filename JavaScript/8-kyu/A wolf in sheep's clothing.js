function warnTheSheep(queue) {
  let index = queue.lastIndexOf("wolf");
  return index === queue.length - 1 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
}
