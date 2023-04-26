import React from "react";
import PropTypes from 'prop-types';

import Square from '../Square/Square';
import './board.scss';
const Board = ({squares,onClick}) => {
    return(
    <>
        
        <div className="board-grid">
            {squares.map((square, i) => (
                <Square key={i} value={square} onClickSquare={() => onClick(i)}/>
            ))}
        </div>
    </>);
};

Board.propTypes = {
    onClick: PropTypes.func,
    squares: PropTypes.array,
};

export default Board;
