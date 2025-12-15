// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(typeof(id));

console.log(id === anotherId);

// Symbol() always creates a unique value, even with the same description.

// const id = Symbol.for('123')
// const anotherId = Symbol.for('123')

// console.log(id === anotherId); // true

// const BigNumber = 643763563868398787n

// Reference (non primitive)

// array, objects, functions

const heros =["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "ayushi",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack ( primitive ), heap( non primitive )

let myYoutuberName = "ayushijhadotcom"
let anotherName = myYoutuberName

anotherName = "hateyouayushi"

console.log(myYoutuberName)
console.log(anotherName)


let userOne = {
    email :" ayushijha518gmail.com"
}
let userTwo = userOne

userTwo.email = "ayushigmail.com"

console.log(userOne)
console.log(userTwo)

// Objects in JavaScript are stored in heap memory

// userOne does not hold the object itself — it holds a reference (address)

// userTwo = userOne means:

// both variables point to the same object

// let userTwo = { ...userOne }
// or
// let userTwo = Object.assign({}, userOne)

// userTwo.email = "ayushigmail.com"

// console.log(userOne) // unchanged
// console.log(userTwo) // changed

