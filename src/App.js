/* eslint-disable arrow-body-style */
import React, {useState} from "react";
import Board from './components/Board'
import { calculateWinner } from "./helpers";
import './styles/root.scss'
// import Square from './components/Square'

const App = () => {
  const [history, setHistory]=useState([{board: Array(9).fill(null), isXNext:true}]);
  const [currentMove, setCurrentMove] = useState(0);
  const current=history[currentMove];
  console.log('history',history);
    const winner=calculateWinner(current.board);

  const message=winner? `Winner is ${winner}`: 
  `Next player is ${current.isXNext ? 'X':'O'}`
  const handleSquareClick=(position)=>{
    // /*Not edit the X or O again if selected*/
if(current.board[position] || winner){
  return;
}
// to select X or O
    setHistory(prev=>{
const last =prev[prev.length-1];
    const newBoard= last.board.map((square, pos) =>{
if(pos === position){
  return last.isXNext? 'X':'O';
}
return square;
      });
      return prev.concat({board:newBoard, isXNext:!last.isXNext});
    });
    // setIsXNext((prev)=>!prev);
    // to set the next value either x or O acc to prev value
    setCurrentMove(prev=>prev+1);
  };
   return(
     <div>
   <h1>Tic tac Toe game</h1>
   <h2>{message}</h2>
   <Board board={current.board} handleSquareClick={handleSquareClick} />
   </div>
   );
   };
export default App;