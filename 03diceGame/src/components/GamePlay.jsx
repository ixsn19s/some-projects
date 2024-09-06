import React, { useState } from 'react';
import TotalScore from './TotalScore'
import NumberSelect from './NumberSelect'
import DiceRoll from './diceRoll'
import ShowRules from './ShowRules';


const GamePlay = () => {

    const [score, setScore] = useState(0);
    const [selectedNum, setSelectedNum] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [Rules, setRules] = useState(false);

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

    const resetScore = () => {
        setScore(0);
    }


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


        <div className='flex flex-col items-center mt-4'>

        <button 
         onClick={resetScore}
         className='bg-zinc-50 mt-3 text-black px-8 py-1 rounded-md text-lg hover:bg-black border border-black hover:border-white hover:outline-none hover:text-white '>
            Reset Score
        </button >

        <button
         onClick={ () => setRules ( prev => !prev)}
         className='bg-zinc-800 mt-3 text-white px-8 py-1 rounded-md text-lg hover:bg-white border hover:border-black hover:outline-none hover:text-black  '> 
           {Rules ? "Hide" : "Show"} Rules
        </button>


        </div>
        {Rules && <ShowRules />}

     


    </div>
  )
}

export default GamePlay