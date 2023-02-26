function greet(name) {
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  
  return `Hello ${capitalized}!`;
}
