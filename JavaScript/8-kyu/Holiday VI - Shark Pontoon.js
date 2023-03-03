function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin) sharkSpeed /= 2;
  const timeToPontoon = pontoonDistance / youSpeed;
  const timeToYou = sharkDistance / sharkSpeed;
  return timeToYou < timeToPontoon ? "Shark Bait!" : "Alive!";
}
