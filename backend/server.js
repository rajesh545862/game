const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Seed users
app.get('/seed', async (req, res) => {
    await User.deleteMany({});
    await User.create([
        { username: 'admin', password: 'admin1234' },
        { username: 'guest', password: 'guest1234' },
    ]);
    res.send('Seed complete');
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
        res.json({ success: true, userId: user._id });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});

// Game history
app.get('/history/:userId', async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (user) {
        res.json(user.gamesPlayed);
    } else {
        res.status(404).send('User not found');
    }
});

// Record of game result
app.post('/record', async (req, res) => {
    const { userId, result } = req.body;
    const user = await User.findById(userId);
    if (user) {
        user.gamesPlayed.push({ result });
        await user.save();
        res.json({ success: true });
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
