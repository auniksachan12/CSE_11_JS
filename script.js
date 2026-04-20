console.log("Hello world");
console.log("<br>")
document.write("Hello world <hr>");
console.log("Hello stars");

// Data types and typeof() function use
var num;
console.log(num);
console.log(typeof(num));
num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num="Smith";
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));

// Function 
var fun=function(){
    alert("Hello World!");
}

// Array
var numArray=[1,2,3,4,5,6,7,8,9,10];
var animalName=["Cat","Dog","Lion","Horse","Tiger"];

// Object - Key:Value pairs
var person={
    "Name":"Smith",
    "Age":"20",
    "Occupation":"Frontend developer"
} 

// Symbol type
const sim1=Symbol(10);
console.log(sim1);
const sim2=Symbol(10);
console.log(sim2);
console.log(sim1 == sim2);

// Loops
var x; 
for(x=1;x<=10;x++){
    console.log(2*x);
}

var count;
document.write("Starting Loops <br>");
for(count = 0; count < 10; count++) {
    document.write("Count: " + count + "<br>");
}
document.write("Loop Stopped! <br>");

const person={
    fname:"Aunik",
    lname:"Sachan",
    age:"18"
};
for(let x in person){
    console.log(person[x]);
}

var y=0;
document.write("Loop start");
while(y<10){
    document.write("Current count:"+y+"<br/>");
    y++;
}
document.write("Loop stopped");
