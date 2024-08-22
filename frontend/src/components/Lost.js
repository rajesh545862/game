import React from 'react';

function Lost({ userId, result, onReplay, onViewHistory }) {
    return (
        <div>
            <h2>{result === 'lost' ? 'You Lost!' : 'You Won!'}</h2>
            <button onClick={onReplay}>Play Again</button>
            <button onClick={onViewHistory}>View History</button>
        </div>
    );
}

export default Lost;
