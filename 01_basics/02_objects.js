// singleton

/*A singleton in Java is a design pattern that ensures a class has only one instance throughout the application,
 and it provides a global point of access to that instance. This is useful when exactly one instance of a class is needed to coordinate actions,
such as managing a shared resource (e.g., database connection, logging service, configuration manager).

Key Characteristics of a Singleton:
Single Instance: Only one instance of the class is created.
Global Access: The same instance is accessible globally.
Private Constructor: Prevents instantiation from outside the class.
Static Method: Provides access to the instance. */

// Object.create--> constructor method

// object literals
/*In JavaScript, object literals are a way to define and create objects using a simple and readable syntax. 
An object literal is a comma-separated list of key-value pairs (also known as properties) wrapped in curly braces {} */

const mySym = Symbol("key1")


const JsUser = {
    name: "Jyoti",
    "full name": "Jyotirmayee Satapathy",
    [mySym]: "mykey1",
    age: 18,
    location: "berhampur",
    email: "jyoti@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])// we cannont access it thought . or"",only access through []
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log("+++++++++++++++++++++++++++++++++++++");

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Debasish",
            lastname: "Satapathy"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
