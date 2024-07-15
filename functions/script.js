'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // old way to add a default value ES5
  // var = var || 1; creates a default value for the argument (in our case, 1)
  // * numPassengers = numPassengers || 1;
  // * price = price || 199;
  // new way is to add to function args.

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

const flight = 'LH234';
const victor = {
  name: 'victordhn',
  passport: 123456789,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
};

checkIn(flight, victor);
console.log(flight);
console.log(victor);

// callback and higher-order functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`${fn(str)}, transformed by ${fn.name}`);
};

transformer('JavaScrip is the best!', upperFirstWord);
transformer('JavaScrip is the best', oneWord);

const high5 = function () {
  console.log('SUP');
};
document.querySelector('body').addEventListener('click', high5);

// A function returning a function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('bom dia');
greeter('victor');
greet('bom dia')('José');

const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet2('Valeu aí')('Victor');
