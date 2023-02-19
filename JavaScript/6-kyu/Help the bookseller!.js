function stockList(listOfArt, listOfCat) {
  if (listOfArt.length === 0 || listOfCat.length === 0) {
    return "";
  }
  
  let totalQuantity = {};
  for (let cat of listOfCat) {
    totalQuantity[cat] = 0;
  }
  
  for (let art of listOfArt) {
    let [code, quantity] = art.split(" ");
    let cat = code[0];
    if (totalQuantity.hasOwnProperty(cat)) {
      totalQuantity[cat] += parseInt(quantity);
    }
  }
  
  let result = "";
  for (let i = 0; i < listOfCat.length; i++) {
    let cat = listOfCat[i];
    let quantity = totalQuantity[cat];
    result += `(${cat} : ${quantity})`;
    if (i < listOfCat.length - 1) {
      result += " - ";
    }
  }
  
  return result;
}
