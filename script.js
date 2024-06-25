// single line comment
/*
* DEFINE MUTABLE VAR: let _var_
* MUTATE VAR: _var_ = _newValue_
* DEFINE CONSTANT: const _value__  (priority)
* SHOW ON CONSOLE: console.log(_var_)
* DATATYPE: typeof _var_
? COMPARISON VAL AND TYPE: _var1_ === _var2__
? OPERATORS PRECEDENCE: usually math > comparison
* TEMPLATE LITERALS: `text ${_var_}` 
if-else control structure:
! if (condition_1) {}
! else if (condition_2) {}
! else {}
* CONVERT DATATYPE = Number(_var_); String(_var_); Boolean(_var_)
* TYPE COERCION = + string (concat), - stirng (number)
* FALSY VALUES = 0, '' , undefined, null, NaN
? LOGICAL OPERATORS = AND &&, OR ||, NOT !
*/

// ---------------------------
// * CODING CHALLENGE #1

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let bmiMark = massMark / (heightMark**2);
let bmiJohn = massJohn / (heightJohn**2);
let markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark,bmiJohn,markHigherBMI);



// ---------------------------
// * CODING CHALLENGE #2

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 99;
// let heightJohn = 1.85;
// let bmiMark = (massMark / (heightMark**2)).toFixed(2);
// let bmiJohn = (massJohn / (heightJohn**2)).toFixed(2);
// let markHigherBMI = bmiMark > bmiJohn;

if (markHigherBMI) {
    console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`);
} else {
    console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMark}!`);
}


// ---------------------------
// * CODING CHALLENGE #3

const dolphinsScores = [30, 40, 90];
const koalasScores = [27, 37, 87];


let sum = 0; // initialization, condition, increment
for(let i = 0; i < dolphinsScores.length; i++) {
    sum += dolphinsScores[i];
}
const dolphinsAverage = sum/dolphinsScores.length
console.log(dolphinsAverage)

sum = 0;
for(let i = 0; i < koalasScores.length; i++) {
    sum += koalasScores[i];
}
const koalasAverage = sum/koalasScores.length
console.log(koalasAverage)

if (dolphinsAverage>koalasAverage && dolphinsScores.some(el => el > 100)) {
    console.log('Dolphins WON!')
} else if (dolphinsAverage<koalasAverage && koalasScores.some(el => el > 100)) {
    console.log('Koalas WON')
} else if (dolphinsAverage===koalasAverage && koalasScores.some(el => el > 100) && dolphinsScores.some(el => el > 100)) {
    console.log('That is a DRAW!')
} else {
    console.log('all wrong!')
}
