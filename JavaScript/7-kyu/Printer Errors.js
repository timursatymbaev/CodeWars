function printerError(s) {
  let errors = s.split('').filter(c => c > 'm').length;
  return errors + '/' + s.length;
}
