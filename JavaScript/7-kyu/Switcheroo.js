function switcheroo(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      result += "b";
    } else if (str[i] === "b") {
      result += "a";
    } else {
      result += str[i];
    }
  }
  return result;
}
