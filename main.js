let color = 'black';
let click = true;
let backgroundColor = 'white';
function populateBoard(s){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${s} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${s} , 1fr)`;
    

    let amount = s*s
    for(let i =0;i<amount;i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover',colorSquare);
        square.style.backgroundColor = backgroundColor;
        board.insertAdjacentElement("beforeend", square);
    }
}
function colorSquare(){
    if (click){
        if (color === "random"){
            this.style.backgroundColor = `hsl(${Math.random()* 360},100%, 50%)`;
        }else{
            this.style.backgroundColor = color;
        }
    }
}
function changeSize(input){
    if (input >= 2 && input <= 100){
        document.querySelector('.error').style.display='none'
        populateBoard(input);
    }else {
        document.querySelector('error').style.display = 'flex';
    }
}

function changeColor(choice){
    color = choice;
}
function resetColor() {
    let squares = document.querySelectorAll('.board div');
    squares.forEach(square => square.style.backgroundColor = 'white');
}
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let randomColor = '#';
//     for (let i = 0; i < 6; i++) {
//         randomColor += letters[Math.floor(Math.random() * 16)];
//     }
//     return randomColor;
// }
function pickColor() {
    const colorPicker = document.getElementById("favcolor");
    color = colorPicker.value; // Update the color variable with the picker value
}
document.querySelector("body").addEventListener("click", (e) => {
   if (e.target.tagName != "BUTTON"){
    click = !click;  
    if (click){
        document.querySelector(".mode").textContent ="Mode: Coloring"

    }else{
        document.querySelector(".mode").textContent ="Mode: Coloring is off"
    }
   }
});