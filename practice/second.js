//Operation of operaters in js
// let a = 5;
// let b = 3;
// console.log('a =',a, 'b =',b);


// console.log('a =',a, 'b =',b);
// console.log("a+b =",a+b);
// console.log("a-b =",a-b);
// console.log("a*b =",a*b);
// console.log("a/b =",a/b);
// console.log("a%b =",a%b);
// console.log("a**b =",a**b);// this operater is use to give a power ex. in this case b is the power of a number.
                            
//example of unary operator


// a++;
// console.log('a =',a);
// b++;
// console.log('b =',b);
// a--;
// console.log('a =',a);
// b--;
// console.log('b =',b);

// console.log('a =',a++);
// console.log('a =',a);
// console.log('b =',b++);
// console.log('b =',b);

// console.log('a =',--a);
// console.log('b =',--b);

//This is the example of assignment operator

// a += 2; //This is equal to the a = a+2;
// console.log('a =',a);
// a -= 2; //This is equal to the a = a-2;
// a *= 2; //This is equal to the a = a*2;
// a /= 2; //This is equal to the a = a/2;
// a **= 2; //This is equal to the a = a**2;

// console.log('a =',a);

//This is the example of comparison operater

// let a = 5;
// let b = "2";

// console.log("a == b",a==b);
// console.log("a != b",a!=b);

// let c = 5;
// let d = "2";
// console.log("a === b",a===b);
// console.log("a !== b",a!==b);

let a = 5;
let b = 6;

let cond1 = a<b;
let cond2 = a === b;

console.log(" cond1 && cond2:", cond1 && cond2);
console.log(" cond1 || cond2:", cond1 || cond2);

let cond3 = a>b;
let cond4 = a === 5;

console.log(" cond3 && cond4:", cond3 && cond4);
console.log(" cond3 || cond4:", cond3 || cond4);

console.log(!(a==b));// print opposite condition