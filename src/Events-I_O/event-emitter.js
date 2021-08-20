const events=require('events');
const eventEmitter=new events.EventEmitter();

// Event Tanımlama
eventEmitter.on('selamla',(object)=>{
  console.log(`merhaba ${object.name} ${object.surname}`);
});

// BUnun farkı ise once sadece bir kere emitlenir.
eventEmitter.once('merhabaDe',()=>{
  console.log("merhaba");
});

// Event Caagirma
eventEmitter.emit('selamla',{name:'Osman',surname:'Yüksel'});

setTimeout(()=>{
  eventEmitter.emit('selamla',{name:'Murat',surname:'Kömür'});
},1000);


eventEmitter.emit('merhabaDe');
eventEmitter.emit('merhabaDe');