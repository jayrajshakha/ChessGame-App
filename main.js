
const gameBoard = document.querySelector('#gameboard');
const gamePlayer = document.querySelector('#player');
const displayInfo = document.querySelector('#info-display');
const width = 8;

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
];

function createBoard() {

    startPieces.forEach((item, i) => {

        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = item
        //square.classList.add('bedge');
        square.setAttribute('square-id', i)

        const row = Math.floor((63 - i) / 8) + 1;
        if (row % 2 === 0) {
            square.classList.add(i % 2 === 0 ? 'bedge' : 'brawn');
        }
        else {
            square.classList.add(i % 2 === 0 ? 'brawn' : 'bedge')
        }


        if (i <= 15) {

            square.firstChild.firstChild.classList.add('black')
        }

        if (i >= 48) {

            square.firstChild.firstChild.classList.add('white')
        }



        if(i <= 15){
          square.firstChild.firstChild.classList.add('black');

        }
        if(i >= 48){
          square.firstChild.firstChild.classList.add('white')
        }
        gameBoard.appendChild(square);



    })

}

createBoard();