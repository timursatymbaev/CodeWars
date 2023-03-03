function bump(road) {
  let bumpCount = 0;
  for (let i = 0; i < road.length; i++) {
    if (road[i] === "n") {
      bumpCount++;
    }
  }
  return bumpCount > 15 ? "Car Dead" : "Woohoo!";
}
