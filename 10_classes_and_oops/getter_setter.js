class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email (){
        return this._email.toUpperCase()
        
    }
    set email (value){
        this._email = value
    }

    get password(){
        return `${this.password}ayushi`
    }

    set password(value){
        this._password = value
    }
}

const ayushi = new User("ayushi@gmail.com", "123456")

console.log(ayushi.email);
