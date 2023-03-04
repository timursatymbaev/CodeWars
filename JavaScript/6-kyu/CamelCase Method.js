String.prototype.camelCase = function() {
  const words = this.trim().split(/\s+/);
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}
