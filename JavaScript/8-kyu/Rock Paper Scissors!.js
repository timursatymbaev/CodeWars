rps = (p1, p2) => p1 === p2 ? "Draw!" : `Player ${["scissors", "paper", "rock"].indexOf(p1) === (["scissors", "paper", "rock"].indexOf(p2) + 2) % 3 ? 1 : 2} won!`
