// example of Array

// const marks = [20,95,65,75,23,85];
// console.log(marks);

// marks[1] = 100;
// console.log(marks);

// let cars = ["XUV7OO",'THAR',"SAFARI","KIA","SWIFT"];
// console.log(cars);

// console.log(cars[2]);
// cars[1] = "FORTUNER";
// console.log(cars);

// let info = ["maruti",52,65,"scorpio"];
// console.log(info);

// looping on array
// let hero = ["ironman","spiderman","antman","divya","HANUMAN","shaktiman"];
//for loop
// for(let idx=0; idx<hero.length; idx++){
//     console.log(hero[idx]);
// }

//while loop
// let idx=0;
// while(idx<hero.length){
//     console.log(hero[idx]);
//     idx++;
// }

//do while loop
// let idx=0;
// do{
//     console.log(hero[idx]);
//     idx++;
// }while(idx<hero.length)

//for of loop
// for(let value of hero){
//     console.log(value);
// }

//Array methods
// let foodItems = ["potato","apple","tomato","chips"];
// console.log(foodItems);

//push method to add items in last of the array
// console.log(foodItems.push("burger"));
// //or
// console.log(foodItems.push("pizza","vadapav","puff"));
// console.log(foodItems);

//pop method to delet items in last of the array
// console.log(foodItems.pop());
// console.log(foodItems);

//array to string 
// console.log(foodItems.toString());
// or
// let marks = [89,98,78,90,34];
// console.log(marks);
// console.log(marks.toString());

//concat method to joint 2 or more array with each other
// console.log(foodItems.concat(marks));

//unshift method to add items in start
// console.log(foodItems.unshift("watermelon","mango"));
// console.log(foodItems);

//shift method to remove items from start
// console.log(foodItems.shift());
// console.log(foodItems);

//slice method
// console.log(foodItems.slice(1,3));
// console.log(foodItems.slice(1));

//splice method [.splice(startidx,delet,replace)]
// let arr =[1,2,3,4,5,6,7];
// console.log(arr);
// arr.splice(2,2,101,102);
// console.log(arr);
 
//to add item with splice
// arr.splice(2,0,101);
// console.log(arr);

//to remove element with splice
// arr.splice(3,1);
// console.log(arr);

//to replace element
// arr.splice(2,1,101);
// console.log(arr);

//example of forEach 
// let arr = [1,2,3,4,5,6];
// // with normal function
// arr.forEach(function printVal(val){
//     console.log(val);
// })
//  //with arrow function
// arr.forEach( (val) => {
//     console.log(val);
// })

//another example
// const arr = ["mumbai","junagadh","bantwa"];

// arr.forEach((city) => {
//     console.log(city);
// })
// // for(let val of arr){
// //     console.log(val);
// // }
// arr.forEach(function city(name){
//     console.log(name.toUpperCase());
// })

//Map method for array 
// const num = [33,55,65];
// num.map((val) => {
//     console.log(val);
// });
// //or
// const printValue = num.map((val) => {
//     return val*val;
// });
// console.log(printValue);

//filter method to use make condition on array
// let arr = [1,2,3,4,5,6,7,8,9];

// let evenArr = arr.filter((val) => {
//     return val%2===0;
// });
// console.log(evenArr)

//Array reduce method 
//code for sum of value
// let arr = [1,2,3,4];
// let output = arr.reduce((res,cur) => {
//     return res+cur;
// });
// console.log(output); 
//With onther method 
// let intialValue = 0;
// let output = arr.reduce((res,cur) => res+cur,intialValue);
// console.log(output);

//code for find largest value
// let arr = [44,77,36,89,45,67];
// let output = arr.reduce((res,cur) =>{
//     return res>cur? res: cur;
// })
// console.log(output);
