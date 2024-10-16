const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

/*1) this in Global Scope (outside functions):
In the global context, this refers to the global object (window in browsers or global in Node.js).
If you just log console.log(this) outside any function, you will get the global object.
2) this in Regular Functions (outside objects):
In a regular function (like chai()), this refers to the global object by default, unless you're in strict mode ('use strict'), where this is undefined. */

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

const myArray = [2, 5, 3, 7, 8];
myArray.forEach(element => console.log(element));

/* The forEach method iterates over each element in myArray, and element => console.log(element) is an arrow function that logs each element to the console.
The arrow function makes it more concise than using function(element) syntax. */

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//() for function defination and () for execution 
/*An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
 It helps prevent global scope pollution by creating a private scope. 
 This is useful for organizing code, avoiding conflicts, and protecting variables from being accessed globally. */

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')