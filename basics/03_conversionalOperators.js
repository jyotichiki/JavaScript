let score=33;
console.log(typeof score);
console.log(typeof (score));
//score is a number, so typeof score will return "number".

let score1="66";
console.log(typeof (score1));
let valueInNumber=Number(score1);
console.log(typeof (valueInNumber));
/*score1 is a string, so typeof score1 will return "string".
valueInNumber is the result of converting score1 ("66") to a number, so typeof valueInNumber will return "number".*/

let score2="66abc";
let valueInNumber1=Number(score2);
console.log(typeof (valueInNumber1));
console.log(valueInNumber1);

/* score2 is a string, but when you try to convert "66abc" to a number, it results in NaN (Not a Number).
typeof valueInNumber1 is still "number" because NaN is considered a special kind of number in JavaScript.
The value of valueInNumber1 will be NaN. */

let score3=null;
console.log(typeof score3);
let valueInNumber2=Number(score3);
console.log(typeof (valueInNumber2));

/*typeof null returns "object" in JavaScript (this is a known quirk of JavaScript).
Converting null to a number returns 0, so typeof valueInNumber2 will be "number".*/

let score4= undefined;
console.log(typeof score4);
let valueInNumber3=Number(score4);
console.log(typeof (valueInNumber3));
/* typeof undefined returns "undefined".
Converting undefined to a number results in NaN, so typeof valueInNumber3 will be "number". */

let score5= true;
console.log(typeof score4);
let valueInNumber4=Number(score5);
console.log(typeof (valueInNumber4));
/* typeof true returns "boolean".
Converting true to a number results in 1, so typeof valueInNumber4 will be "number". */

let someNumber=98;
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);



/*  Notes
 i) 1=> true;0=>false
 ii) ""=>false
 iii)"jyoti"=>true
*/ 