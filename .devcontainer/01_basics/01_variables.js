const accountId=12345;
// if we write anything in const it cannot be changed
let emailId="jyotichiki150@gmail.com";
var accountPassword="setup";
accountCity="Berhampur";//we can declare but not a good practice.
let accountstate;// if you declare any variable and leave it as it is then js will take the value as undefined.

/*if we want to declare variable its two type 
1.let
2.var
In JavaScript, we can declare variables using either let or var. We avoid using var because it doesn't handle scope well,
meaning it can cause problems in certain parts of the code, like inside loops or if statements.
Instead, we use let because it properly limits the variable to the block of code where it’s defined, 
making things easier to manage and less prone to errors.*/

// After changing all the data

/* accountId=2;(Not Allowed)
(TypeError: Assignment to constant variable.)*/
accountPassword=212121;
emailId="jyotirmayee1525@gmail.com";
accountCity="Hyderabad";


console.log(accountId);
console.log(accountPassword);
console.log(emailId);
console.log(accountCity);
console.log(accountstate);

// To save Our Time we can use shortcut
console.table([accountId,accountPassword,emailId,accountCity,accountstate]);

/* Prefer not to use var
because  of issue in block scope and functional scope. */
