// O(1) most efficient
function addItems(n) {
  return n + n + n;
}

console.log(addItems(10));

//0(a+b)
function logitems(a, b) {
  for (let i = 0; i <= a; i++) {
    console.log(i);
  }
  for (let j = 0; j <= b; j++) {
    console.log("j ", j);
  }
}

logitems(3, 3);

//0(a*b)
function logitems2(a, b) {
  for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
      console.log(i, j);
    }
  }
}

logitems2(4, 4);

