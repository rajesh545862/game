const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    gamesPlayed: [
        {
            result: String,
            date: { type: Date, default: Date.now },
        },
    ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
