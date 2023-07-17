// import Song from './models/playlist.js ';
import express from 'express';
// const express = require('express');

const app = express();
app.use(express.json());

// In-memory storage for the playlist
let playlist = [];

// Playlist model
class Song {
  constructor(title, artists, url) {
    this.title = title;
    this.artists = artists;
    this.url = url;
    this.playCount = 0;
  }
}

// Add a song to the playlist
app.post('/playlist', (req, res) => {
  const { title, artists, url } = req.body; //get the data from the body
  const song = new Song(title, artists, url); // Create a new song object
  playlist.push(song);  //Add the song to the playlist
  res.status(201).json({ message: 'Song added to the playlist' }); // Send a response
});

// Play a song from the playlist
app.post('/playlist/play', (req, res) => {
  const { title } = req.body; // Get the title from the body
  const song = playlist.find((s) => s.title === title); // Find the song in the playlist by title
  if (!song) {
    res.status(404).json({ error: 'Song not found in the playlist' }); // Send an error response
  } else {
    song.playCount++; // Increment the play count
    res.status(200).json({ message: `Now playing: ${song.title}` }); // Send a response
  }
});

// Get the list of songs in the playlist
app.get('/playlist', (req, res) => {
  const { sort } = req.query; // Get the sort query parameter
  let sortedPlaylist = []; // Create a new array to store the sorted playlist
  if (sort === 'most-played') {
    sortedPlaylist = [...playlist].sort((a, b) => b.playCount - a.playCount); // Sort the playlist by play count
  } else {
    sortedPlaylist = [...playlist]; // Copy the playlist
  }
  res.status(200).json(sortedPlaylist); // Send the sorted playlist as a response
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});