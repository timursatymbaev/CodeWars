function calculateTip(total, rating) {
  rating = rating.toLowerCase();
  switch (rating) {
    case 'terrible':
      return 0;
    case 'poor':
      return Math.ceil(total * 0.05);
    case 'good':
      return Math.ceil(total * 0.1);
    case 'great':
      return Math.ceil(total * 0.15);
    case 'excellent':
      return Math.ceil(total * 0.2);
    default:
      return 'Rating not recognised';
  }
}
