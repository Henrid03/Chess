window.onload = function(){
const board = document.getElementById("Chessboard");
const files = ['a','b','c','d','e','f','g','h'];
let variable = 64;



for(let row = 8; row >0; row --){
    for(let col = 0; col<8; col++){
        const square = document.createElement('div');
        const id = files[col]+row;
        const numid = variable--;
        square.classList.add('square');
        if ((row + col) % 2 === 0) {
            square.classList.add('w');
          } else {
            square.classList.add('b');
          }
          square.id=id;
          square.dataset.numid=numid;
          board.appendChild(square);
          square.addEventListener("click", 
            function() 
            {
            console.log("Clicked:", square.id,"  ",square.dataset.numid, "  ", square.dataset.pieceType);
            
            for (let square of document.getElementsByClassName('square')) {
              square.classList.remove('highlight');
          }
          square.classList.add('highlight');
          }

            
          );
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
    let pieceType = "blank";

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
        } else if (piece === "♖" || piece === "♜") {
            pieceType = "rook";
        }
        square.dataset.pieceType=pieceType;
        if (pieceType !== "blank") {
          square.style.cursor = "pointer";
      }

  }
  
}