function remove(str) {
  let result = str.replace(/!/g, "");
  if (str.endsWith("!")) {
    result += "!";
  }
  else {
    result = result + "!";
  }
  return result;
}
