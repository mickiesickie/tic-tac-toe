import React, { useState } from "react";
import Board from "../Board/Board";
import calculateWinner from "../../utils/calculateWinner";

const Game = () => {
    const [squares, setSquares]= useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(squares);

    const handleClick = idx => {
        const boardCopy = [...squares];
        
        if(winner || boardCopy[idx]) return;
        boardCopy[idx] = xIsNext ? "X": "0";
        setSquares(boardCopy);
        setXisNext(!xIsNext);
    };
    const handleStartGame = () => {
        setSquares(Array(9).fill(null));
    };
    return(
    <div className="game">
    <div className="game-board">
            <div className="status">
            {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
            </div>
        <Board  squares={squares} onClick={handleClick}/>
        <button onClick={handleStartGame}> Start Game</button>
    </div>
    </div>);
};

export default Game; 