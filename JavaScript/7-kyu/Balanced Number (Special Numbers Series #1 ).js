function balancedNum(number) {
  let numStr = String(number);
  if (numStr.length < 3) {
    return "Balanced";
  }
  let mid = Math.floor(numStr.length / 2);
  let leftSum = numStr.slice(0, mid - (numStr.length % 2 === 0 ? 1 : 0)).split("").reduce((acc, cur) => acc + parseInt(cur), 0);
  let rightSum = numStr.slice(mid + 1).split("").reduce((acc, cur) => acc + parseInt(cur), 0);
  return leftSum === rightSum ? "Balanced" : "Not Balanced";
}
