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

// **************** Operations ****************

let value=3;
let negValue = -value;
console.log(negValue);

console.log(2+2);//add
console.log(2-2);//subtract
console.log(2*2);//multiply
console.log(2**2);//2 to the power 2
console.log(2**3);//2 to the power 3
console.log(2/2);//divide
console.log(2%2);//reminder

let str1="hello";
let str2=" jyoti";
let str3=str1+str2;
console.log(str3);// hello jyoti

console.log("1"+2);//12
console.log(1+"2");//12
console.log("2"+"2");//22
console.log("1"+2+2);//122
console.log(1+2+"2");//32

/* In JavaScript, when you use the + operator, it either adds numbers or concatenates strings. If one operand is a string, JavaScript treats the other operand as a string too. So, "1" + 2 becomes "12", and "1" + 2 + 2 gives "122" because it first concatenates "1" with 2 as a string. But when numbers come first, like in 1 + 2 + "2", the numbers add up first, so it results in "32". */
/* According to ECMAScript specifications, the behavior you're seeing follows these rules:

Addition Operator (+): The + operator can either perform arithmetic addition or string concatenation. If either operand is a string, the + operator will convert the other operand to a string and concatenate them.

Type Coercion: When the + operator is applied and one of the operands is a string, JavaScript converts the non-string operand into a string (type coercion) before performing concatenation.

Left-to-Right Evaluation: Expressions are evaluated from left to right. When an expression starts with numbers (like 1 + 2 + "2"), JavaScript first evaluates the numerical sum (1 + 2 = 3), then converts the result to a string for concatenation with the remaining string operand, leading to "32".

Thus, "1" + 2 results in "12" because "1" is treated as a string, while 1 + 2 + "2" first computes 3, and then concatenates with "2" yielding "32". */

console.log(true);//true
console.log(+true);//1
/* console.log(true+);//error-> SyntaxError: Unexpected token ')'  */
console.log(+"");//0

let num1,num2,num3;
num1=num2=num3=2+2;

console.log(num1);//4
console.log(num2);//4
console.log(num3);//4

let gameCounter =100;
gameCounter++;//101
console.log(gameCounter);//101
++gameCounter;//102
console.log(gameCounter);//102
--gameCounter + gameCounter++ ;
console.log(gameCounter);

let abc=100;
let adf=--abc + abc++ ;//99+99
console.log(adf);


/* --gameCounter + gameCounter++;

First: --gameCounter decreases gameCounter by 1, so it becomes 101.
Then: gameCounter++ is evaluated, first returning 101, then increasing gameCounter to 102.
Final expression value is 101 + 101 = 202.
console.log(gameCounter);

Output: Prints 102 because of the post-increment in the previous step.
So, the final value of gameCounter is 102 */

function addNumber(){
    let number1 =200;
    let result= --number1+number1++;
    console.log(result);
    return(result);
}
addNumber();

