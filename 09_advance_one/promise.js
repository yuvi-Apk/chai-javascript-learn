console.log("promises");

const promiseOne = new Promise(function (resolve, reject) {
  // Do async task
  //DB calls ,cryptography,network

  setTimeout(() => {
    console.log("async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed ");
});

// new style

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async 2 task is completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 is resolved");
});

// promise style 3

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async 3 task is completed");
    resolve({
      username: "yuvi",
      email: "yuvi@gmail.com",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// 4th promise style

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ username: "yuvi_new", email: "yuvi@gmail.com_new" });
    } else {
      reject("Error: Something went wrong !");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The promise is Either is resolved or rejected !");
  });

//   promise five

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ subject: "Javascript", subjectCode: "Js" });
    } else {
      reject("Error: Something went wrong !");
    }
  }, 1000);
});

(async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})();

(async function getAllUser() {
  try {
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary",
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
})();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Then catch",data);
  })
  .catch((error) => {
    console.log(error);
  });
