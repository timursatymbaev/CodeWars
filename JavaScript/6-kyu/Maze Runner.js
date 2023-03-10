function mazeRunner(maze, directions) {
  let position = findStartPosition(maze);
  
  for (let i = 0; i < directions.length; i++) {
    switch (directions[i]) {
      case "N":
        position[0]--;
        break;
      case "E":
        position[1]++;
        break;
      case "S":
        position[0]++;
        break;
      case "W":
        position[1]--;
        break;
    }
    
    if (!isInBounds(position, maze)) {
      return "Dead";
    }
    
    let tile = maze[position[0]][position[1]];
    
    if (tile === 1) {
      return "Dead";
    } else if (tile === 3) {
      return "Finish";
    }
  }
  
  return "Lost";
}

function findStartPosition(maze) {
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        return [i, j];
      }
    }
  }
}

function isInBounds(position, maze) {
  let row = position[0];
  let col = position[1];
  
  return row >= 0 && row < maze.length && col >= 0 && col < maze[row].length;
}
