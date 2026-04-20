// Two ways
var person2=new Object();
person2.name='aunik';
person2.age=20;
person2.isMarried=false;
person2.address={};
person2.address.name='Chipiyana bujurg';
console.log(person2);

var myinfo=new Array();
var myinfo1=Array();
console.log(myinfo,myinfo1);
let collection=[
    {},
    [],
    true,
    "john",
    function(){},
    12234345,
    undefined,
    null,
    new String("abc"),
    new Date
];
console.log(collection);
collection.teachername="John";
collection.phoneNo=21899190323;
console.log(collection);
console.log(collection.length);
let x=(collection.length)-1;
console.log(collection.x) ;