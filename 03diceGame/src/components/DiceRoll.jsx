import React, { useState } from 'react';

const DiceRoll = ({currentDice, rollDice}) => {


    return (
        <div className='flex flex-col justify-center'>
            <div onClick={rollDice} className='mt-4 justify-center flex'>
                <img 
                    key={currentDice}    // Add key prop
                    className='w-40 cursor-pointer h-40'
                    src={`/images/dice_${currentDice}.png`}
                    alt={`dice${currentDice}`}
                />
            </div>
            <p className='flex justify-center font-medium'>Click On Dice To Roll</p>
        </div>
    );
}

export default DiceRoll;
