/*
* use strict
* function declaration and expression
! Arrow function
! example: const calcAge3 = birthYear => 2037 - birthYear;
? ARRAYS
? append: array.push(val)  
? add to beginning: array.unshift(val)  
? remove last: array.pop()
? remove first: array.shift()
? show index: array.indexOf(val)
? in array?: array.includes(val)
*/

'use strict';


const calcTip = function(bill) {
    let tip;
    bill < 50 || bill > 300 ? tip = bill*0.2 : tip = bill*0.15;
    tips.push(tip);
    totals.push(tip+bill);
}

const billArray = [125,555,44];
let tips = [];
let totals = [];

for (let i=0; i<billArray.length; i++) {
    calcTip(billArray[i]);
}

console.log(tips, totals)