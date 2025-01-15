// for(let i=0; i<=100 ; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

let gameNumber = 25;
let userNumber = prompt("Guess game number(0-50):");

while(userNumber != gameNumber){
    userNumber = prompt("wrong guess. enter again:");
}

console.log("you win!");


// let gameNumber = 25;
 
// for(userNumber = prompt("Guess game number(0-50):");userNumber != gameNumber;){
//     userNumber = prompt("wrong guess. enter again(0-50):");
// }

// console.log("you win!");