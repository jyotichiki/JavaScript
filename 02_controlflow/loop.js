// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
//Map is an Object which holds key value pair.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }// error myObject is not iterable

const myObject1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//for in loop

for (const key in myObject1) {
    //console.log(`${key} shortcut is for ${myObject1[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

/* Key Differences:
Feature	   for...of	                                             for...in
Usage	   Iterates over values of iterable objects	      Iterates over keys/indices of objects or arrays
Works on   Arrays, Strings, Maps, Sets, etc.	          Objects, Arrays (not recommended for arrays)
Returns	   The value at each iteration	                  The key (for objects) or index (for arrays)
Objects	   Cannot be used directly on objects	          Works well with objects */


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

const myNums1 = [1, 2, 3]

// const myTotal = myNums1.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums1.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);


//Notes:-

/*  1. for...of Loop:
Purpose: Iterates over the values of iterable objects such as arrays, strings, Maps, and Sets.
Why it works on arrays/strings: Arrays and strings are iterable objects in JavaScript, so for...of allows you to loop through the elements directly.
Why it doesn't work on plain objects: Objects are not iterable by default. Hence, using for...of on an object like myObject will throw an error, since objects are key-value stores, not iterable sequences of values.
Rules:
for...of can be used on iterable objects (arrays, strings, maps, sets).
It cannot be used directly on plain objects unless the object implements an iterable protocol. */

/* 2. for...in Loop:
Purpose: Iterates over the keys (or indices in the case of arrays) of an object or array.
Why it works on objects: Objects in JavaScript are essentially collections of key-value pairs, making for...in perfect for looping over keys.
Why it works on arrays but isn't recommended: for...in will iterate over the indices (not values) of arrays, which may not be the desired behavior, since indices are treated as keys. It is usually better to use for...of or Array.prototype.forEach for arrays.
Rules:
for...in can be used on objects and arrays, but it returns the keys or indices, not the values directly.
*/

/* 3. forEach(): A higher-order function that executes a provided function once for each array element.

It is ideal when you need to iterate over an array and perform actions on each element.
It doesn't return any value or new array (unlike map or filter) */

/* 4. filter(): Creates a new array with elements that pass the test implemented by a provided function.

Useful for filtering data based on conditions.
 */

/* 5. map(): Creates a new array with the results of calling a provided function on every element in the array.

Useful for transforming data.*/