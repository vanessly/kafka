// Game.jsx
 
import React, { useState } from 'react';
import Story from './Story';
import Win from './Win';
import Lose from './Lose';
 
const Game = () => {
    const [scenario, setScenario] = useState(0);
    const [gameResult, setGameResult] = useState(null);
 
    const handleChoice = (choice) => {
        if (choice.nextScenario !== undefined) {
            setScenario(choice.nextScenario);
        } else {
            console.error('Invalid choice!');
        }
    };
 
    const restartGame = () => {
        setScenario(0);
        setGameResult(null);
    };
 
    const handleGameResult = (result) => {
        setGameResult(result);
    };
 
    return (
        <div>
            {gameResult === 'win' && <Win />}
            {gameResult === 'lose' && <Lose />}
            {gameResult ? (
                <center>
                    <button className="font-['VT323'] text-black w-1/2 bg-[#d6d3d1] leading-none rounded-md p-2 text-2xl" onClick={restartGame}>Restart Game</button>
                </center>
            ) : (
                <Story scenario={scenario} onChoice={handleChoice} onGameResult={handleGameResult} />
            )}
        </div>
    );
};
 
export default Game;