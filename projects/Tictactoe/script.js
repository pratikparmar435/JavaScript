let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newGame = document.querySelector("#new-btn");


let turn0 = true; //playerX , player0

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turn0){
            box.innerText = "0";
            box.style.color = "black";
            turn0 = false;
        } else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const resetGame = () => {
    turn0 = true;
    boxEnable();
    msgContainer.style.display = "none";
}
const boxDisable = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const boxEnable = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Player ${winner} wins!`;
    msgContainer.style.display = "block";
    boxDisable();
}

const checkWinner = () => {
    for(let pattern of winPattern){
        pos1Val = boxes[pattern[0]].innerText;
        pos2Val = boxes[pattern[1]].innerText;
        pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos3Val == pos2Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

resetBtn.addEventListener('click', resetGame);
newGame.addEventListener('click', resetGame);