// console.log(window);
// console.dir(window.document);
// console.dir(document);

// //lets excess body from html
// console.log(document.body);
// console.dir(document.body);
// console.dir(document.body.childNodes);
// console.log(document.body.childNodes);
// console.dir(document.body.childNodes[1]);

//we can change anything with js
// document.body.style.background = "pink";
// document.body.childNodes[1].innerText = "Apna Collage";
// document.body.childNodes[1].style.color = "blue";

//acess element by id 
// let id = document.getElementById("demo1");
// console.dir(id);

//get element by class
// let headings = document.getElementsByClassName("head");
// console.dir(headings);
// console.log(headings);

//get element by tag name
// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

//get element by query selector it support below all 3 methods

//with tag name
// let firstEl = document.querySelector("p");
// console.dir(firstEl);//return 1st element
// let allEl = document.querySelectorAll("p");
// console.dir(allEl); //return all elements

//with class name
//  let firstEl = document.querySelector(".myClass");
//  console.dir(firstEl);
//  let allEl = document.querySelectorAll(".myClass");
//  console.dir(allEl);

//with id name
//  let element = document.querySelector("#demo1");
//  console.dir(element);