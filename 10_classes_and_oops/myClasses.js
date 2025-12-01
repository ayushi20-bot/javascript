// ES6

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
        
//     }

//     changeUSername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userOne = new User("ayushi", "ayushi@gmail.com", "123")

// console.log(userOne.encryptPassword())
// console.log(userOne.changeUSername())

//behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUSername = function(){
    return `${this.username.toUpperCase()}`
}

const diya = new User("diya", "diya@gmail.com", "123")

console.log(diya.encryptPassword());
console.log(diya.changeUSername());

