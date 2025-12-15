//singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"ayushi",
    "full name": "ayushi jha",
    [mySym]: "mykey1",
    age: 20,
    location: "gwalior",
    email: "ayushijha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "ayushi@chatgpt.com"
// Object.freeze(JsUser)

// JsUser.email = "ayushi@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// objects 2

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log((tinderUser.hasOwnProperty('isLoggedIn')));

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ayushi",
            lastname: "jha"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

// const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const users = [
    {
        id: 0, 
        email: "d@gmail.com"
    },
    {
        id: 1, 
        email: "h@gmail.com"
    },
    {
        id: 2, 
        email: "a@gmail.com"
    },
]

users[1].email


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ayushi"
}

course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

// {
//     "name": "ayushi",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]