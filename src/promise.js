const asenkronFunc = (sayi) => {
  return new Promise((resolve, reject) => {
    if (typeof sayi === "number") {
      resolve("her şey yolunda");
    } else {
      reject("deger tanimsiz");
    }
  });
};

asenkronFunc("osman")
  .then((data) => {
    console.log(data);
    return 1;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
