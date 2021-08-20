console.log(__filename);
console.log(__dirname);


// Dosya okuma
const fs=require('fs');

fs.readFile('src/Events-I_O/demo.txt',(error,data)=>{
  if(error)
    console.log(error);

  console.log(data.toString());
  console.log('Dosya okuma isi bitti');
});

// Burada aslında dosya işlemleri bitmeden bir sonraki adıma geçmiyor.
const demoDosyasi=fs.readFileSync('src/Events-I_O/demo.txt');
console.log(demoDosyasi.toString());
console.log('senkron okuma bitti.');


// Dosya oluşturma ve yazma 

