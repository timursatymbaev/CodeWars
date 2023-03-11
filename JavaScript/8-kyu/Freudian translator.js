function everything(word) {
  return "sex";
}

function toFreud(str) {
  if (!str) {
    return "";
  }
  return str.split(" ").map(everything).join(" ");
}
