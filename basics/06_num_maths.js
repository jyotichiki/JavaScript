const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());// gives values between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

/* console.log(Math.random());:

This prints a random decimal number between 0 and 1 (but not exactly 1). Math.random() generates a floating-point number in the range of 0 <= number < 1.
Example: 0.354218359

console.log((Math.random() * 10) + 1);:

Math.random() * 10 generates a random decimal number between 0 and 10.
Adding 1 to it shifts the range, so it becomes a random decimal number between 1 and 11 (but less than 11).
Example: 3.65281832 (random number between 1 and 11)

console.log(Math.floor(Math.random() * 10) + 1);:

Math.random() * 10 gives a random decimal number between 0 and 10.
Math.floor() rounds the decimal down to the nearest whole number.
Adding 1 shifts the range to a random whole number between 1 and 10.
Example: 7 (random integer between 1 and 10)

const min = 10; const max = 20;:

The min is set to 10, and the max is set to 20. This defines the range for the next random number.
console.log(Math.floor(Math.random() * (max - min + 1)) + min);:

Math.random() * (max - min + 1) generates a random decimal number between 0 and 11 (since max - min + 1 = 20 - 10 + 1 = 11).
Math.floor() rounds this down to the nearest whole number (from 0 to 10).
Adding min (which is 10) shifts the range up to a random whole number between 10 and 20.
Example: 15 (random integer between 10 and 20) */