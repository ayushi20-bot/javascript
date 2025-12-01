class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USername: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const ayushi = new User("ayushi")
// console.log(ayushi.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const moni = new Teacher("moni", "moni@gmail.com")
// console.log(moni.createId());

