import React, { useState } from 'react';
import Login from './components/Login';
import GamePlay from './components/GamePlay';
import Lost from './components/Lost';
import History from './components/History';

function App() {
    const [screen, setScreen] = useState('login');
    const [userId, setUserId] = useState(null);
    const [gameResult, setGameResult] = useState(null);

    const handleLogin = (id) => {
        setUserId(id);
        setScreen('gameplay');
    };

    const handleGameEnd = (result) => {
        setGameResult(result);
        setScreen('lost');
    };

    return (
        <div className="App">
            {screen === 'login' && <Login onLogin={handleLogin} />}
            {screen === 'gameplay' && <GamePlay userId={userId} onGameEnd={handleGameEnd} />}
            {screen === 'lost' && <Lost userId={userId} result={gameResult} onReplay={() => setScreen('gameplay')} />}
            {screen === 'history' && <History userId={userId} />}
        </div>
    );
}

export default App;
