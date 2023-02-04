const number = busStops => busStops.reduce((acc, curr) => acc + curr[0] - curr[1], 0);
