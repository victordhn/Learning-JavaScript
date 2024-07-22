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
// document.querySelector('body').addEventListener('click', high5);

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

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'jonas');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// call, apply and bind

//function.call(this,arguments)
book.call(eurowings, 23, 'Sarah');

//function.apply(this,[arrayofarguments])
const flightData = [123, 'Victor'];
book.apply(lufthansa, flightData);

//BIND
//function.bind(this,args) ---> creates a new function with a bounded THIS and args
const bookEW = book.bind(eurowings);
bookEW(109, 'Steve');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.answer-poll')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial bind
const addTax = (rate, value) => value + rate * value;
console.log(addTax(0.1, 100));
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
