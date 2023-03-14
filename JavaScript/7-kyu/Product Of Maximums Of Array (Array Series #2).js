function maxProduct(arr, k){
  // Sort the array in descending order
  arr.sort(function(a, b) { return b - a; });
  
  // Initialize the product to 1
  var product = 1;
  
  // Multiply the k largest numbers together
  for (var i = 0; i < k; i++) {
    product *= arr[i];
  }
  
  // Return the product
  return product;
}
