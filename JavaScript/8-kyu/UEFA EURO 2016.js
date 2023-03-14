function uefaEuro2016(commands, scores){
  if (scores[0] == scores[1])
    return `At match ${commands[0]} - ${commands[1]}, teams played draw.`;
  if (scores[0] < scores[1])
    return `At match ${commands[0]} - ${commands[1]}, ${commands[1]} won!`;
  return `At match ${commands[0]} - ${commands[1]}, ${commands[0]} won!`;
}
