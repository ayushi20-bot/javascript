class User{
    constructor(username){
        this.username =  username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const ayushi = new Teacher("ayushi", "ayushi@gmail.com", "123")

ayushi.logMe()
ayushi.addCourse()
const diya = new User("diya")
diya.logMe()
// diya.addCourse()
console.log(ayushi instanceof User);

