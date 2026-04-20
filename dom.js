// // DOM in JS
// // selecting with id
// var result = document.getElementById("para");
// console.log(result);
// result.innerHTML = "This is a paragraph";
// document.write(result)

// // selecting with class
// const elements = document.getElementsByClassName("myclass");
// console.log(elements);
// elements[0].innerHTML = "Jitendra";
// elements[1].innerHTML = "Kumar";
// elements[2].innerHTML = "Sir";

// // selecting with tag name
// const results3 = document.getElementsByTagName("p");
// results3[0].innerHTML = "This is a paragraph 1";
// results3[0].style.color = "blue";
// results3[2].innerText = "This is a paragraph 3";
// results3[3].innerHTML = "This is a paragraph 4";

// // selecting with query selector
// const test = document.querySelector("ul li:nth-child(2)");
// test.style.backgroundColor = "yellow";

// const test2 = document.querySelectorAll("ul li"); // returns a NodeList
// for(x in test2){
//     test2[x].style.backgroundColor = "#000";
//     test2[x].style.margin = "10px";
// }

// // getAttribute()
// const element=document.getElementById("myH1");
// let text=element.getAttribute("class");
// document.getElementById("demo").innerHTML=text;


// // setAttribute()
// function myFunction(){
//     document.getElementById("myH1").setAttribute("class","democlass");
//     alert("Attribute added successfully");
// }


//// document.createElement() (before,after,append,prepend)
// // remove()-remove a particular tag(method)