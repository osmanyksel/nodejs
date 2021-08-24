// String ifadelerde boşluk yerine bir karakter ataması yapılıyor ve aynı zamanda türkçe karakter var ise de onlarıda düzeltiyor.
var slugify=require('slugify');

const text='galatasaray şampiyon olma adayı olaçak';
const slug=slugify(text,'*');

console.log(slug);