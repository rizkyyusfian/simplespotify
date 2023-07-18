// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const { Schema } = mongoose;
const playlistSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    playCount: {
        type: Number,
        default: 0,
    },
}, { timestamps: true , versionKey: false});

// const Playlist = mongoose.model('Playlist', playlistSchema);
// export default Playlist;
// export default mongoose.model('Playlist', playlistSchema);

module.exports = mongoose.model('Playlist', playlistSchema);