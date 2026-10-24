class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    console.log(`Your password is encrypted ${this.password}`);
  }

  changeUsername() {
    console.log(`Changed To capital: ${this.username.toUpperCase()}`);
  }
}

const chai = new User("yuvi", "yuvi@gmail.com", 454545);

console.log(chai.changeUsername());
console.log(chai.encryptPassword());

// behind the scene

function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryptPassword = function () {
  console.log(`Your password is encrypted ${this.password}`);
};

user.prototype.changeUsername = function () {
  console.log(`Changed To capital: ${this.username.toUpperCase()}`);
};


const tea = new user("yuvi", "yuvi@gmail.com", 454545);

console.log(tea.changeUsername());''
console.log(tea.encryptPassword());