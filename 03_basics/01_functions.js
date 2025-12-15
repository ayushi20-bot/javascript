// const { use } = require("react");

function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");  
}

// sayMyName()

function addTwoNum(num1, num2){
    console.log(num1 + num2);
}

addTwoNum(3, 7)

// function addTwoNum(num1, num2){
    // let result = num1+num2
    // return result
//     return num1 + num2
// }

// const result = addTwoNum(3, 7)
// console.log("Result: ", result);

function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("ayushi"))
// loginUserMessage()

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "ayushi",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)