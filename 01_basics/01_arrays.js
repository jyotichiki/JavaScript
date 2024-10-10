// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
/* A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values)
as those of the source object from which the copy was made. As a result when you change either the source or the copy */
/* A deep copy of an object is a copy whose property do not share the same references*/
console.log(myArr[1]);
console.log(myArr2[3]);

// Array methods

 myArr.push(6)
// myArr.push(7)
myArr.pop()

// myArr.unshift(9) //[9,0, 1, 2, 3, 4, 5]
// myArr.shift()//[0, 1, 2, 3, 4, 5]

// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(3));//3

 const newArr = myArr.join()

 console.log(myArr);
 console.log( newArr);//0, 1, 2, 3, 4, 5
 console.log(typeof newArr);//string


// slice, splice
/* slice(): Does not modify the original array; creates a new array.
splice(): Modifies the original array; can add, remove, or replace elements.*/

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

console.log("*******************************");

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) //not a good practice

//console.log(marvel_heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros[3][1]);//flash

 const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]

//console.log(all_new_heros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);/*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]*/



console.log(Array.isArray("Hitesh"))//false
console.log(Array.from("Hitesh"))//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting -->output--> []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]