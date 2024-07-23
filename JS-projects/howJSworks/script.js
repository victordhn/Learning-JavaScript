'use strict';

// Hoisting works only for Function Declarations

console.log('before declaration', addDec(2, 3));
// console.log('before expression', addExp(2, 3));
// console.log('before arrow', addArr(2, 3));
// comentados pois não funcionam

function addDec(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

const addArr = (a, b) => a + b;

console.log('after declaration', addDec(2, 3));
console.log('after expression', addExp(2, 3));
console.log('after arrow', addArr(2, 3));

// THIS
// utilizado em objetos, como um método

const victor = {
  year: 1991,
  name: 'Victor',
  calcAge: function () {
    return 2024 - this.year;
  },
};
console.log(victor.calcAge());

// primitives and objects

// primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age, oldAge);

// object
const me = {
  name: 'victor',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(me, friend);


// para criar um novo objeto (shallow copy, e nao apenas usar a msm referencia)
// Object.assign({},me)
const me2 = Object.assign({},me);
me2.age=30
console.log(me,friend,me2)

// por ser uma shalow copy, se tiver objetos dentro do objetos, esses serão mantidos como referencia

