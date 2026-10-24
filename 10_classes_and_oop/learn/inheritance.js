class User {
    constructor(username){
        this.username =username;
    }

    logMe(){
        console.log(`The logged in user is the ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email= email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai","teacher@gmail.com","password")

chai.logMe();
chai.addCourse();

const tea = new User('yuvi');

// tea.addCourse();

console.log(chai instanceof Teacher);