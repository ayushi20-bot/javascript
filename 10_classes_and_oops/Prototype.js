let myName = "ayushi     "

// console.log(myName.length);

let myChar = ["el", "will"]

let fullName = {
    el: "eleven",
    will: "william",

    getElFullName: function(){
        console.log(`El full name is ${this.el}`);
        
    }
}

Object.prototype.ayushi = function(){
    console.log(`ayushi is present`);
    
}

Array.prototype.heyAyushi = function(){
    console.log(`ayushi says hello`);
    
}

// fullName.ayushi()
// myChar.ayushi()
// // fullName.heyAyushi()
// myChar.heyAyushi()

//inheritance

const User = {
    name: "ayushi",
    email: "ayushi@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeASsaignment: 'JS',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "gaytri    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);


}

anotherUsername.trueLength()
"ayushi".trueLength()