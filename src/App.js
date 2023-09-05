import "./App.css";
import React, { useState } from "react";

function isWinner(states) {
    const winPos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const wp of winPos) {
        if (states[wp[0]] === states[wp[1]] && states[wp[0]] === states[wp[2]]) {
            return states[wp[0]];
        }
    }
    return false;
}

function Square({ handleClick, value, id }) {
    // const [value, setValue] = useState(null);

    return <button id={ id } className='square' onClick={ handleClick }>{ value }</button>
}


/*
* 0|1|2
* 3|4|5
* 6|7|8
*
* */
export default function Board() {

    const [turn, setTurn] = useState(false);

    const [states, setStates] = useState(Array(9).fill(null));

    function handleClick(e) {
        const id = parseInt(e.target.id);
        if (states[id])
            return;
        const tempStates = [...states];
        tempStates[id] = turn ? 'O' : 'X';
        setStates(tempStates);
        setTurn(!turn);
    }


    const winRes = isWinner(states);
    if (winRes) {
        return <h1>{ winRes } is Win</h1>
    }

    return (
        <>
            <div className='board-row'>
                <Square value={states[0]} handleClick={handleClick} id={0} />
                <Square value={states[1]} handleClick={handleClick} id={1} />
                <Square value={states[2]} handleClick={handleClick} id={2} />
            </div>
            <div className='board-row'>
                <Square value={states[3]} handleClick={handleClick} id={3} />
                <Square value={states[4]} handleClick={handleClick} id={4} />
                <Square value={states[5]} handleClick={handleClick} id={5} />
            </div>
            <div className='board-row'>
                <Square value={states[6]} handleClick={handleClick} id={6} />
                <Square value={states[7]} handleClick={handleClick} id={7} />
                <Square value={states[8]} handleClick={handleClick} id={8} />
            </div>
        </>
    );
}