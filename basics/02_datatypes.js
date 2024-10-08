"use strict";//treat all JS code as newer version

//alert(3+3);//we are using nodejs engine not browser//ReferenceError: alert is not defined

console.log(3+3);

let name="jyoti";//string data type
let age= 21;//number data type
let isLoggedIn=true;//boolean data type 

/* Range(Primitive data types)
number ==> 2 to power 53
bigint
string==>""
boolean==> true/false
null==> stand alone value(reprentation of empty value)
undefined==> value not available
symbol==> unique
*/

console.log(typeof "jyoti");
console.log(typeof null);//object
console.log(typeof undefined);//undefined


// ************************************ 
//primitive datatype(7types)
/* 1.String
2.Number
3.Null
4.Boolean
5.Undefined
6.symbol
7.BigInt
*/

const score = 100;
const scoreValue = 100.3;

const isLoggedIn1 = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber=3456543576654356754n;

//Reference Type/Non-Primitive type
/* 1. Array
2.Objects
3.Functions
*/

const heros = ["shaktiman", "naagraj", "doga"];//array
//object-->
let myObj = {
    name: "hitesh",
    age: 22,
}
//function-->
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);//symbol
console.log(typeof bigNumber);//bigint
console.log(typeof outsideTemp);//object
console.log(typeof scoreValue);//number
console.log(typeof myFunction);//function
console.log(typeof heros);//Object

/* 
Argument Type	       Result
Undefined	     "undefined".
Null	         "object".
Boolean          "boolean".
Number	         "Number".
String	         "string".
*/
// ******************************************
//Stack (Primitive),Heap(Non-primitive)

/*The stack is where primitive types are stored.
 These types are simple and have a fixed size,
  which makes them easier to store in this fast-access memory area. 
  The stack works in a Last In, First Out (LIFO) manner, 
  meaning the last variable pushed onto the stack is the first to be popped off.*/

let x = 10;  // Stored in the stack
let y = x;   // A copy of 'x' is made and stored separately
x = 20;

console.log(x); // 20 (modified)
console.log(y); // 10 (original)

/*Here, x and y hold separate copies of the value in the stack.
 Changing x does not affect y because primitive types are copied by value.*/

 //-----------------------------------

 /* Heap (Non-Primitive Types)
The heap is where non-primitive types (or reference types) are stored. 
These types (like objects and arrays) can grow in size dynamically, 
which requires more complex memory management. Instead of storing the actual value in the stack,
 JavaScript stores a reference (or address) in the stack, pointing to the location in the heap where the actual object or array is stored.*/

let obj1 = { name: "Alice" };  // Stored in the heap, reference is in the stack
let obj2 = obj1;               // Both obj1 and obj2 point to the same memory location in the heap

obj1.name = "Bob";

console.log(obj1.name); // Bob (modified)
console.log(obj2.name); // Bob (also modified, since obj1 and obj2 point to the same object)

/* In this example, obj1 and obj2 reference the same object in the heap.
 Changing obj1 also affects obj2 because they both point to the same location in memory.*/

 /*
 Key Differences:
Stack:

Fast access.
Stores primitive values directly.
Values are copied by value (each variable gets its own copy).
Heap:

Slower access.
Stores non-primitive values (objects, arrays, etc.).
Variables store a reference to the memory location in the heap (copied by reference).
 */
