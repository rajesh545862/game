import React, { useEffect, useState } from 'react';
import { getHistory } from '../services/api';

function History({ userId }) {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            const response = await getHistory(userId);
            setHistory(response.data);
        };
        fetchHistory();
    }, [userId]);

    return (
        <div>
            <h2>Game History</h2>
            <ul>
                {history.map((game, index) => (
                    <li key={index}>
                        {game.date}: {game.result}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default History;
