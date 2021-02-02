/* eslint-disable arrow-body-style */
import React, {useState} from 'react'
import Square from './Square'
// eslint-disable-next-line arrow-body-style
const Board = () => {
  const [board, setBoard]=useState(Array(9).fill(null));
  const[isXNext, setIsXNext]=useState(false);
  const handleSquareClick=(position)=>{
    /*Not edit the X or O again if selected*/
if(board[position]){
  return;
}
//to select X or O
    setBoard((prev)=>{
      return prev.map((square, pos) =>{
if(pos === position){
  return isXNext? 'X':'O';
}
return square;
      })
    })
    setIsXNext((prev)=>!prev);//to tap next either X or O according to pos
  };

const renderSquare=position=>{
  return( 
  <Square  
    value={board[position]} 
    onClick={()=>
    handleSquareClick(position)}
  />
  );
};
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      
      </div>
      <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      </div>
      <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board
