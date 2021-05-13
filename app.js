let likes = false;
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

Promise.all([
  promiseOne
    .then((message) => {
      console.log(message.name + " " + message.message);
    })
    .catch((error) => {
      console.log(error.name + " " + error.message);
    }),
  promiseTwo
    .then((message) => {
      console.log(message.name + " " + message.message);
    })
    .catch((error) => {
      console.log(error.name + " " + error.message);
    }),
  promiseThree
    .then((message) => {
      console.log(message.name + " " + message.message);
    })
    .catch((error) => {
      console.log(error.name + " " + error.message);
    }),
]);
