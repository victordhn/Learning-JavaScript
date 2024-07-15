// Hoisting works only for Function Declarations

console.log('before declaration', addDec(2, 3));
// console.log('before expression', addExp(2, 3));
// console.log('before arrow', addArr(2, 3));
// comentados pois não funcionam

function addDec(a, b) {
  return a + b;
}

const addExp = function (a,b) {
    return a+b;
}

const addArr = (a,b) => a+b;

console.log('after declaration', addDec(2, 3));
console.log('after expression', addExp(2, 3));
console.log('after arrow', addArr(2, 3));
