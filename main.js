function populateBoard(s){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${s} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${s} , 1fr)`;
    

    let amount = s*s
    for(let i =0;i<amount;i++){
        let square = document.createElement('div');
        square.style.backgroundColor="blue";
        board.insertAdjacentElement("beforeend", square);
    }
}

function changeSize(input){
    populateBoard(input);

}