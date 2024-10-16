//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}

/* First Example (addone):

addone(5) works because the function is hoisted. In JavaScript, function declarations (like function addone(num) { ... }) are moved to the top of their scope, so you can call them before they are defined.
The output will be 6 because it adds 1 to the passed argument (5).
Second Example (addTwo):

addTwo(5) will throw an error because const addTwo = function(num) {...} is a function expression. Variables declared with const (or let) are not hoisted. You cannot use addTwo before it is defined in the code.
If you call addTwo(5) after the declaration, it will return 7.*/