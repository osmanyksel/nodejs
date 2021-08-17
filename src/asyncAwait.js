const user = { id: 10, name: "Osman" };
const friends = [
  { id: 11, name: "Kenan" },
  { id: 12, name: "Murat" }
];

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 1000);
  });
};

const getFriends = (userID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(friends);
    }, 500);
  });
};

// callback hell
/*
let userID;

getUser().then((user) => {
  userID = user.id;
  getFriends(userID).then((friends) => {
    console.log(user);
    console.log(friends);
  });
});
*/

// promise chain
/*
getUser()
  .then((user) => {
    return getFriends(user.id);
  })
  .then((friends) => {
    console.log(friends);
  });
*/

// asyncAwait

async function asenkronAkis() {
  try {
    console.log("user islemi basladi");
    const user = await getUser();
    console.log(user);
    console.log("user islemi bitti");

    console.log("friends islemi basladi");
    const friends = await getFriends(user.id);
    console.log(friends);
    console.log("friends islemi bitti");
  } catch (error) {
    console.log(error);
  }
}

asenkronAkis();
