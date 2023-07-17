// create playlist model using mongoose

import mongoose from 'mongoose';

const { Schema } = mongoose;
const playlistSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    artists: {
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
});

const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;