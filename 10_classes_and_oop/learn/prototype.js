let myName = "javascript    ";

// console.log(myName.length);

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.yuvi = function () {
  console.log(`Yuvi is present is all object !`);
};

// heroPower.yuvi();
// myName.yuvi();

String.prototype.arrayYuvi = function () {
  console.log(`I am String yuvi`);
};

// myName.arrayYuvi();

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

myName.trueLength();
