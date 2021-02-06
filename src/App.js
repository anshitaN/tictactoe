/* eslint-disable arrow-body-style */
import React, {useState} from "react";
import Board from './components/Board'
import { calculateWinner } from "./helpers";
import './styles/root.scss'
// import Square from './components/Square'

const App = () => {
  const [board, setBoard]=useState(Array(9).fill(null));
  const[isXNext, setIsXNext]=useState(false);
  const winner=calculateWinner(board);
  console.log(winner);
  const message=winner? `Winner is ${winner}`: `Next player is ${isXNext ? 'X':'O'}`
  const handleSquareClick=(position)=>{
    // /*Not edit the X or O again if selected*/
if(board[position] || winner){
  return;
}
// to select X or O
    setBoard((prev)=>{
      return prev.map((square, pos) =>{
if(pos === position){
  return isXNext? 'X':'O';
}
return square;
      })
    })
    setIsXNext((prev)=>!prev);
    // to set the next value either x or O acc to prev value
  };
   return(
     <div>
   <h1>Tic tac Toe game</h1>
   <h2>{message}</h2>
   <Board board={board} handleSquareClick={handleSquareClick} />
   </div>
   );
   };
export default App;