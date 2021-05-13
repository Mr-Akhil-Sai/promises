let likes = true;
let comments = false;
let shares = true;

let promiseOne = new Promise((resolve, reject) => {
  if (likes) {
    resolve({
      name: "picture one",
      message: "got enough likes",
    });
  } else {
    reject({
      name: "picture one",
      message: "could'nt get enough likes",
    });
  }
});

let promiseTwo = new Promise((resolve, reject) => {
  if (comments) {
    resolve({
      name: "picture one",
      message: "got enough comments",
    });
  } else {
    reject({
      name: "picture one",
      message: "could'nt get enough comments",
    });
  }
});

let promiseThree = new Promise((resolve, reject) => {
  if (shares) {
    resolve({
      name: "picture one",
      message: "got enough shares",
    });
  } else {
    reject({
      name: "picture one",
      message: "could'nt get enough shares",
    });
  }
});

Promise.all([promiseOne, promiseTwo, promiseThree])
  .then((message) => {
    console.log(message);
    console.log(message[0].name + " " + message[0].message);
    console.log(message[1].name + " " + message[1].message);
    console.log(message[2].name + " " + message[2].message);
  })
  .catch((error) => {
    console.log(error);
    console.log(error.name + " " + error.message);
    // console.log(error.name + " " + error.message);
  });

// promiseOne
//   .then((message) => {
//     console.log(message.name + " " + message.message);
//   })
//   .catch((error) => {
//     console.log(error.name + " " + error.message);
//   });

// promiseTwo
//   .then((message) => {
//     console.log(message.name + " " + message.message);
//   })
//   .catch((error) => {
//     console.log(error.name + " " + error.message);
//   });

// promiseThree
//   .then((message) => {
//     console.log(message.name + " " + message.message);
//   })
//   .catch((error) => {
//     console.log(error.name + " " + error.message);
//   });
