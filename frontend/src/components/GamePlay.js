import React, { useState } from 'react';
import './GamePlay.css'; 


const GamePlay = ({ onGameOver }) => {
    const [coins, setCoins] = useState(Array.from({ length: 21 }, (_, i) => i + 1)); 

    
    const handlePick = (count) => {
        if (count < 1 || count > 4) return; 

        const newCoins = coins.slice(0, -count); 
        if (newCoins.length === 0) {
            onGameOver('Player'); 
            return;
        }
        setCoins(newCoins);
        aiPick(newCoins);
    };

    
    const aiPick = (newCoins) => {
        let aiPickCount = 1;

        if (newCoins.length > 0) {
            
            if (newCoins.length % 5 === 0) {
                aiPickCount = 1; 
            } else {
                aiPickCount = (5 - (newCoins.length % 5)) % 4; 
                if (aiPickCount === 0) aiPickCount = 1;
            }

            const updatedCoins = newCoins.slice(0, -aiPickCount);
            if (updatedCoins.length === 0) {
                onGameOver('AI'); 
                return;
            }
            setCoins(updatedCoins);
        }
    };

    return (
        <div className="gameplay">
            <div className="coin-container">
                {coins.map((coinIndex) => (
                    <img
                        key={coinIndex}
                        src={`/images/img${coinIndex}.png`} 
                        alt={`Coin ${coinIndex}`}
                        className="coin-card"
                    />
                ))}
            </div>
            <div className="actions">
                <button onClick={() => handlePick(1)}>Pick 1</button>
                <button onClick={() => handlePick(2)}>Pick 2</button>
                <button onClick={() => handlePick(3)}>Pick 3</button>
                <button onClick={() => handlePick(4)}>Pick 4</button>
            </div>
        </div>
    );
};

export default GamePlay;
