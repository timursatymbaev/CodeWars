points = games => games.reduce((points, game) => points + ((game.split(':')[0] > game.split(':')[1]) ? 3 : game.split(':')[0] === game.split(':')[1] ? 1 : 0), 0)
