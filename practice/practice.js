//function of finding sum of two number
// function mySum(a,b){
//     console.log(a+b);
// }
// mySum(10,29);

//function of finding largest number from an array
// let arr = [97,86,99,89,86,89,97,85,79,94];
// function findLargestNum(arr){
//     let largest = arr[0];

//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>largest){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
//or
// function findLargestNum(arr) {
//     return Math.max(...arr);
// }
// console.log(findLargestNum(arr));

//function to find number is even or odd
// function findEvenOdd(num){
//     if(num % 2 === 0){
//         console.log(`The number ${num} is even.`);
//     }
//     else{
//         console.log(`The number ${num} is odd.`);
//     }
// }
//or
// function findEvenOdd(num){
//    return num % 2 === 0? 'the number is even' : 'the number is odd';
// }
// console.log(findEvenOdd(23));

//function to reverse a string
// let str = "Parmar";
// function reverseString(str){
//     return str.split('').reverse().join('');
      
// }
// console.log(reverseString(str));

//function to find factorial of given number
// function findFactorial(num){
//     let result = 1;
//     for(let i=2; i<=num; i++){
//         result *= i;
//     }
//     return result;
// }

// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }
// console.log(factorial(4));

//function to make palidrome(read same backword and forward)
// function chkPalidrome(str){
//     let str2 = str.split('').reverse().join('');
//     return str2 === str;
// }
// console.log(chkPalidrome("pratik"));
// console.log(chkPalidrome("1221"));

//function to count the number of vowels
// function chkVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(chkVowels("aeiou"));
//with another method
// let vowels = ["a","e","i","o","u"];
// function chkVowels(str){
//    let count = 0;
//    for(const char of str){
//     for(let i=0; i<=vowels.length; i++){
//         if(char === vowels[i]){
//             count++;
//         }
//     }
//    }
//    return count;
// }
// console.log(chkVowels("aeiou"));
//with another method
// let vowels = ["a","e","i","o","u"];
// function chkVowels(str){
//     let count = 0;
//     for(let char of str){
//         for(let value of vowels){
//             if(value === char){
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(chkVowels("pratik"));

//function to find largest word in sentence 
// function longestWord(str){
//     let word = str.split(" ");//space is required to chage it in word insted of individual character
//     let longest = "";

//     for(let i=0; i<word.length; i++){
//         if(word[i].length > longest.length){
//             longest = word[i];
//         }
//     }
//     return longest;
// }
// console.log(longestWord("i love javaScript"));

//function to check given number is prime number or not?
// function isPrime(num){
//     if (num<=1){
//         return false;
//     }

//     for(let i=2; i<num; i++){
//         if(num%i===0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(4));



