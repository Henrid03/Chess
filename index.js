window.onload = function(){
const board = document.getElementById("Chessboard");
const files = ['a','b','c','d','e','f','g','h'];
wsquares=document.getElementsByClassName('w');
bsquares=document.getElementsByClassName('b');
let increment = 0;

for(let row = 8; row >0; row --){
    for(let col = 0; col<8; col++){
        const square = document.createElement('div');
        const id = files[col]+row;
        square.classList.add('square');
        if ((row + col) % 2 === 0) {
            square.classList.add('w');
          } else {
            square.classList.add('b');
          }
          increment++;
          const numid = increment;
          square.id=id;
          const piece = square.textContent.trim();
            let pieceType = "";
            if (piece === "♙" || piece === "♟") {
                pieceType = "pawn";
            } else if (piece === "♞" || piece === "♘") {
                pieceType = "knight";
            } else if (piece === "♝" || piece === "♗") {
                pieceType = "bishop";
            } else if (piece === "♛" || piece === "♕") {
                pieceType = "queen";
            } else if (piece === "♚" || piece === "♔") {
                pieceType = "king";
            } else {
                piecetype = "";
                }
            square.dataset.numid = numid ;
            square.dataset.pieceType = pieceType;
            square.dataset.id=id;
          
          
          
          board.appendChild(square);
          square.addEventListener("click", function() {
            console.log("Clicked:", square.id);
            let wsquares = document.getElementsByClassName("w");
            for (let square of wsquares) {
                square.style.backgroundColor = "white";
            }
            
            let bsquares = document.getElementsByClassName("b");
            for (let square of bsquares) {
                square.style.backgroundColor = "black";
            }
            square.style.backgroundColor = "yellow"; // test highlight
            
            console.log("Piece on this square:", square.dataset.pieceType);



    });
          }
          
}
const initialPositions = {
    a8: "♜", b8: "♞", c8: "♝", d8: "♛", e8: "♚", f8: "♝", g8: "♞", h8: "♜", 
    a7: "♟", b7: "♟", c7: "♟", d7: "♟", e7: "♟", f7: "♟", g7: "♟", h7: "♟", 
  
    a2: "♙", b2: "♙", c2: "♙", d2: "♙", e2: "♙", f2: "♙", g2: "♙", h2: "♙", 
    a1: "♖", b1: "♘", c1: "♗", d1: "♕", e1: "♔", f1: "♗", g1: "♘", h1: "♖"  
  };
  for (const squareId in initialPositions) {
    const piece = initialPositions[squareId];
    const square = document.getElementById(squareId);
    square.textContent = piece;
  }
}