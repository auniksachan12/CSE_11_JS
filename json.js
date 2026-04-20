// members[0].powers[2];
// jason.parse,json.stringfile
var text='{"employees":['+
'{"firstName":"John","lastName":"Doe"},'+
'{"firstName":"Anna","lastName":"Smith"},'+
'{"firstName":"Peter","lastName":"Jones"}]}';
obj=JSON.parse(text);
document.getElementById("demo").innerHTML=
obj.employees[1].firstName+" "+obj.employees[1].lastName;

var person={
    name:"Jeet",
    age:50,
    city:"Ghaziabad"
};
let x;
for(x in person){
    console.log(person[x]);
}
// // for of loop
var arr=[10,20,30];
for(var value of arr){
    console.log(value);
}

function add(a,b){
    return a+b;
}
const add=(a,b)=>{
    return a+b;
}

// const add=(a+b)=>a+b;