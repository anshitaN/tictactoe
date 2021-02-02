/* eslint-disable arrow-body-style */
import React from "react";
import Board from './components/Board'
import './Styles/root.scss'
// import Square from './components/Square'

const App = () => {
   return(
     <div>
   <h1>Tic tac Toe game</h1>
   <Board />
   </div>
   );
   };
export default App;