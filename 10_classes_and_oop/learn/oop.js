const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

// console.log(user.getUserDetails())

// console.log(globalThis)


//? Constructor functions

function User(username,loggedInCount,isLoggedIn){
    this.username = username;
    this.loggedInCount =loggedInCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const  userOne = new User("yuvi",10,true);
const  userTwo = new User("yuvi2",10,true);

// console.log(this)
// console.log(userOne)
// console.log(userTwo)

console.log(userOne.constructor)


// NOTES:
//
// 1. The 'new' keyword creates a new object (instance).
//
// 2. The constructor function is called with the given arguments.
//
// 3. The 'this' keyword refers to the newly created object.
//
// 4. The arguments are assigned to the object's properties
//    using 'this'.
//
// 5. The newly created object is returned automatically
//    when 'new' is used, unless the constructor explicitly
//    returns another object.