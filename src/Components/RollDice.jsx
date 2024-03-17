// RollDice.js
import React, { useState } from 'react';
import './RollDice.css';
import Die from './Die';

const RollDice = ({ sides }) => {
    const [state, setState] = useState({
        die1: 'one',
        die2: 'one',
        rolling: false
    });

    const roll = () => {
        setState({
            die1: sides[Math.floor(Math.random() * sides.length)],
            die2: sides[Math.floor(Math.random() * sides.length)],
            rolling: true
        });

        setTimeout(() => {
            setState(prevState => ({ ...prevState, rolling: false }));
        }, 1000);
    };

    const handleBtn = state.rolling ? 'RollDice-rolling' : '';

    return (
        <div className='RollDice'>
            <div className='RollDice-container'>
                <Die face={state.die1} rolling={state.rolling} />
                <Die face={state.die2} rolling={state.rolling} />
            </div>
            <button className={handleBtn} disabled={state.rolling} onClick={roll}>
                {state.rolling ? 'Rolling' : 'Roll Dice!'}
            </button>
        </div>
    );
};

RollDice.defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
};

export default RollDice;
