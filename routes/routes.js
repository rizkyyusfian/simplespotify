// import Express  from "express";
// import Playlist from '../models/playlist.js';
const Express = require('express');
const Playlist = require('../models/playlist.js');
const router = Express.Router();


router.get('/', (req, res) => {
    // res.send('Hello World!');
    res.json({ message: 'Hello World!' });
});


// // // Playlist model
// class Playlist {
//   constructor(title, artists, url) {
//     this.title = title;
//     this.artists = artists;
//     this.url = url;
//     this.playCount = 0;
//   }
// }

// Add a song to the playlist
router.post('/playlist', (req, res) => {
    const { title, artist, url } = req.body; //get the data from the body
    const song = new Playlist({ title, artist, url }); // Create a new song object
    song.save().then(() => {
        res.status(201).json({ message: 'Song added to the playlist' }); // Send a response
    }).catch((error) => {
        res.status(400).json({ error: error.message });
    });
});

// Get the list of songs in the playlist
router.get('/playlist', (req, res) => {
    const { sort } = req.query; // Get the sort query parameter
    let sortedPlaylist = []; // Create a new array to store the sorted playlist
    Playlist.find().then((songs) => {
        if (sort === 'most-played') {
            sortedPlaylist = [...songs].sort((a, b) => b.playCount - a.playCount); // Sort the playlist by play count
        } else {
            sortedPlaylist = [...songs]; // Copy the playlist
        }
        res.status(200).json(sortedPlaylist); // Send the sorted playlist as a response
    }).catch((error) => {
        res.status(400).json({ error: error.message });
    });
});

 // Play a song from the playlist
router.post('/playlist/play', (req, res) => {
    const { title } = req.body; // Get the title from the body
    playlist.findOne({ title }).then((song) => {
        if (!song) {
            res.status(404).json({ error: 'Song not found in the playlist' }); // Send an error response
        } else {
            song.playCount++; // Increment the play count
            song.save().then(() => {
                res.status(200).json({ message: `Now playing: ${song.title}` }); // Send a response
            }).catch((error) => {
                res.status(400).json({ error: error.message });
            });
        }
    }).catch((error) => {
        res.status(400).json({ error: error.message });
    });
});


// // Play a song from the playlist
// app.post('/playlist/play', (req, res) => {
//   const { title } = req.body; // Get the title from the body
//   const song = playlist.find((s) => s.title === title); // Find the song in the playlist by title
//   if (!song) {
//     res.status(404).json({ error: 'Song not found in the playlist' }); // Send an error response
//   } else {
//     song.playCount++; // Increment the play count
//     res.status(200).json({ message: `Now playing: ${song.title}` }); // Send a response
//   }
// });



// export default router;
module.exports = router;