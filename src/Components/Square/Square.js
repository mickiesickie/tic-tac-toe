import React from "react";
import PropTypes from 'prop-types';
import './square.scss';
const Square = ({value, onClickSquare}) => {
    return(
        <button onClick={onClickSquare} className="square-style">
            {value}
        </button>
    );
};

Square.propTypes = {
    value : PropTypes.string,
    onClickSquare: PropTypes.func
};

export default Square;