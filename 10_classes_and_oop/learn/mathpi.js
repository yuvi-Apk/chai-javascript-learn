const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(Math.PI)
console.log(descriptor);

const user = {
    username : "chai",
    age:10,
    isLoggedIn:true,

    loggedMe(){
        console.log(`I logged in buddies`);
        
    }
}

console.log(user)
console.log(Object.getOwnPropertyDescriptor(user,'username'))

Object.defineProperty(user,'username',{
    Writable:false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(user,'username'))

for (const [key,value] of Object.entries(user)) {

    if(typeof value !== 'function' ){
    console.log(`Key ${key} : value ${value}`);

    }
}


