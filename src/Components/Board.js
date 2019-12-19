import React, { useState } from 'react';
import calculateWinner from './calculateWinner';
import Square from './Square';

function Board(){
    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const handleClick = index => {
        const squares = [...boardSquares];
        if (calculateWinner(boardSquares) || squares[index]) return;
        squares[index] = xIsNext ? "X" : "0";
        setBoardSquares(squares);
        setXIsNext(!xIsNext);
    }

    const renderSquare = (index) => {
        return <Square value={boardSquares[index]} onClick={() => handleClick(index)} />
    }

    let status;
    const winner = calculateWinner(boardSquares);
    status =  winner ?  `Winner is: ${winner}` :
    `Next player: ${xIsNext ? "X" : "O"}`


    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
            <div className="board-row">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
            <div className="board-row">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
        </div>      
        )
}

export default Board;