// SOME NOTES FROM PART 1
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
switch control
! switch(var) {
! case val: 
!    do it;
!    break; }
conditional (ternary) operator
! var2 = var1 >= num ? 'text yes': 'text no'
e.g. const drink = age >= 18 ? 'wine': 'water'
*/

/*
* use strict
* function declaration and expression
? Arrow function
? example: const calcAge3 = birthYear => 2037 - birthYear;
*/

// ---------------------------
// * CODING CHALLENGE #1 PART 1

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let bmiMark = massMark / (heightMark**2);
let bmiJohn = massJohn / (heightJohn**2);
let markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark,bmiJohn,markHigherBMI);



// ---------------------------
// * CODING CHALLENGE #2 PART 1

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
// * CODING CHALLENGE #3 PART 1

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

// ---------------------------
// * CODING CHALLENGE #4 PART 1

const bill = 49;
const tip = bill < 50 || bill > 300 ? bill*0.2: bill*0.15;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);

// --------------------------
// * CODING CHALLENGE #1 PART 2


const calcAverage = function (scores) {
    const avgScore = (scores[0]+scores[1]+scores[2])/3
    return avgScore
}

const dolphins = [85,54,41]
const koalas = [23,34,27]


const checkWinner = (dolphins,koalas) => {
    const avgDolphins = calcAverage(dolphins)
    const avgKoalas = calcAverage(koalas)
    let result;
    if (avgDolphins > 2*avgKoalas) {
        result = `Dolphin win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas > 2*avgDolphins) {
        result = `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        result = `no winners`;
    }
    return result;
}

console.log(checkWinner(dolphins,koalas))

// --------------------------
// * CODING CHALLENGE #2 PART 2
