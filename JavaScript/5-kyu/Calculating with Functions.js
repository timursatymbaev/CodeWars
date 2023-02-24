function zero(op) { return op ? op(0) : 0; }
function one(op) { return op ? op(1) : 1; }
function two(op) { return op ? op(2) : 2; }
function three(op) { return op ? op(3) : 3; }
function four(op) { return op ? op(4) : 4; }
function five(op) { return op ? op(5) : 5; }
function six(op) { return op ? op(6) : 6; }
function seven(op) { return op ? op(7) : 7; }
function eight(op) { return op ? op(8) : 8; }
function nine(op) { return op ? op(9) : 9; }

function plus(b) {
  return function(a) {
    return a + b;
  };
}
function minus(b) {
  return function(a) {
    return a - b;
  };
}
function times(b) {
  return function(a) {
    return a * b;
  };
}
function dividedBy(b) {
  return function(a) {
    return Math.floor(a / b);
  };
}
