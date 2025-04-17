window.onload = function(){
const board = document.getElementById("Chessboard");
const files = ['a','b','c','d','e','f','g','h'];
let variable = 64;
function getSquare(row, col) {
  return document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
}




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
          square.id=id;
          square.dataset.row = row;
          square.dataset.col = col + 1;     board.appendChild(square);
          square.addEventListener("click", 
            function() 
            {
            console.log("Clicked:", square.id," row: ",square.dataset.row, " col: ", square.dataset.col, " " ,square.dataset.pieceType);
            
            for (let square of document.getElementsByClassName('square')) {
              square.classList.remove('highlight');
          }
          square.classList.add('highlight');
          const pieceType = square.dataset.pieceType;
          const row = parseInt(square.dataset.row);
          const col = parseInt(square.dataset.col);
          const pieceColor = square.dataset.pieceColor

          if (pieceType === "pawn") {
            if(pieceColor==="white"){
            const forwardOne = getSquare(row + 1, col);
            if (forwardOne) {
              forwardOne.classList.add("highlight");
            }
            if (row === 2) {
              const forwardTwo = getSquare(row + 2, col);
              if (forwardTwo) {
                  forwardTwo.classList.add("highlight");
              }
            }
            const captureLeft = getSquare(row + 1, col - 1);
            if (captureLeft) {
             captureLeft.classList.add("highlight");
            }

            const captureRight = getSquare(row + 1, col + 1);
            if (captureRight) {
            captureRight.classList.add("highlight");
            }
          } else if (pieceColor==="black"){
            const forwardOne = getSquare(row - 1, col);
            if (forwardOne) {
              forwardOne.classList.add("highlight");
            }
            if (row === 7) {
              const forwardTwo = getSquare(row - 2, col);
              if (forwardTwo) {
                  forwardTwo.classList.add("highlight");
              }
            }
            const captureLeft = getSquare(row - 1, col + 1);
            if (captureLeft) {
             captureLeft.classList.add("highlight");
            }

            const captureRight = getSquare(row - 1, col - 1);
            if (captureRight) {
            captureRight.classList.add("highlight");
            }
          }
        } else if(pieceType==="rook"){
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row, col+i);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          } 
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row, col-i);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          }
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row+i, col);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          }
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row-i, col);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          }
         
        }else if(pieceType === "knight") {
          const knightMoves = [
            [2, 1], [2, -1], [-2, 1], [-2, -1], 
            [1, 2], [1, -2], [-1, 2], [-1, -2]  
          ];
        
          knightMoves.forEach(([r, c]) => {
            let targetSquare = getSquare(row + r, col + c);
            
            if (targetSquare) {
              targetSquare.classList.add("highlight");
            }
          });
        }else if(pieceType==="bishop"){
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row+i, col+i);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          } 
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row-i, col-i);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          }
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row+i, col-i);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          }
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row-i, col+i);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          }
        }else if (pieceType==="queen"){
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row+i, col+i);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          } 
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row-i, col-i);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          }
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row+i, col-i);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          }
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row-i, col+i);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          }
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row, col+i);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          } 
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row, col-i);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          }
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row+i, col);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          }
          for(let i = 1; i<9;i++){
            let targetsquare = getSquare(row-i, col);
            if(targetsquare){
              targetsquare.classList.add("highlight")
            }
            else break;
          }

        }else if(pieceType==="king"){
          if(getSquare(row+1, col+1)){
            getSquare(row+1,col+1).classList.add("highlight");
          }
          if(getSquare(row+1, col-1)){
            getSquare(row+1,col-1).classList.add("highlight");
          }
          if(getSquare(row-1, col-1)){
            getSquare(row-1,col-1).classList.add("highlight");
          }
          if(getSquare(row-1, col+1)){
            getSquare(row-1,col+1).classList.add("highlight");
          }
          if(getSquare(row, col+1)){
            getSquare(row,col+1).classList.add("highlight");
          }
          if(getSquare(row+1, col)){
            getSquare(row+1,col).classList.add("highlight");
          }
          if(getSquare(row-1, col)){
            getSquare(row-1,col).classList.add("highlight");
          }
          if(getSquare(row, col-1)){
            getSquare(row,col-1).classList.add("highlight");
          }
        }
        

    
          


           
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
      let pieceColor = ""
        if ("♙♖♘♗♕♔".includes(piece)) {
          pieceColor = "white";
        } else {
          pieceColor = "black";
        }
        square.dataset.pieceColor = pieceColor;

  }

  
}