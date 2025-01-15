//question 1
// let marks = [85,97,44,37,76,60];

// let sum=0;
// for(let i=0; i<marks.length; i++){
//     sum += marks[i];
// }
//or
// for(let val of marks){
//     sum += val;
// }

// avg = sum / marks.length;
// console.log(avg);

//question 2
// let price =[250,645,300,900,50];
//for of loop
// let i=0;
// for(let val of price){
//     console.log("Real Price =",val);
//     let offer = (val*10)/100;
//     price[i] = price[i] - offer;
//     console.log("After offer price is =",price[i]);
//     i++;
// }

//for loop
// for(let i=0; i<price.length; i++){
//     console.log("Real price is =",price[i]);
//     let offer = price[i]/10;
//     price[i] = price[i]-offer;
//     console.log("After offer price is =",price[i]);
// }

//practice question 1 of array method
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies);

//a
// companies.shift();
// console.log(companies);

//b
// companies.splice(2,1,"Ola");
// console.log(companies);

//c
// companies.push("Amazon");
// console.log(companies);

//question 3
// const arr = [1,2,3,4,5,6,7,8,9];
// //print square of each number
// arr.forEach(function printSquare(val){
//     console.log(`Square of ${val} is ${val*val}`);
// })
//with aonter method
// const printSquare = (val) =>{
//      console.log(`Square of ${val} is ${val*val}`);
// }
// arr.forEach(printSquare);
//with another method
// function printSquare(val){
//      console.log(`Square of ${val} is ${val*val}`);
// }
// arr.forEach(printSquare);

//question 4
//student grater than 90+
// let marks = [90,98,94,83,74,98,75,67,78,91,95,74,56,67,78,64,91];

// let topMarks = marks.filter((mark) => {
//     return mark>90;
// });
// console.log(topMarks);

//question 5
// let n = prompt("enter any number:");

// let arr = [];
// for(let i=1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);
// //sum of array
// let sumArr = arr.reduce((res,cur) => {
//     return res+cur;
// });
// console.log(sumArr);
// //product or factorial of array
// let produArr = arr.reduce((res,cur) => {
//     return res*cur;
// });
// console.log(produArr);

