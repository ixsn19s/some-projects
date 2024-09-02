import React, { useState } from 'react';
import TotalScore from './TotalScore'
import NumberSelect from './NumberSelect'
import DiceRoll from './diceRoll'


const GamePlay = () => {

    const [score, setScore] = useState(0);
    const [selectedNum, setSelectedNum] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");

    const generateRandNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const rollDice = () => {
        if(!selectedNum) {
            setError("Please select a number");
            return;  //if any no is not selected then tocal score remains unchanged
        }
        setError("");

        let randNum = generateRandNum(1, 6);  // Generates a number between 1 and 6 inclusive
        setCurrentDice(randNum);


        if(selectedNum === randNum) {
            setScore(prev => prev + randNum)
        } else {
            setScore(prev => prev-2)
        }
        setSelectedNum(undefined);
    };


  return (

    <div className='max-w-[80vw] h-screen mx-auto '>
       <div className=' flex  justify-between'>

        <TotalScore score={score} />
        <NumberSelect
        error={error}
        setError={setError}
         selectedNum={selectedNum}
         setSelectedNum={setSelectedNum} />
       </div>

        <DiceRoll currentDice={currentDice} rollDice={rollDice}/>
    </div>
  )
}

export default GamePlay