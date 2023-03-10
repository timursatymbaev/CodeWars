function duckDuckGoose(players, goose) {
  const chosenIndex = (goose - 1) % players.length;

  return players[chosenIndex].name;
}
