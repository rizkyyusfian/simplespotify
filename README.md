# Simplespotify

## Simple Spotify playlist server for Homework Module 2.3 on GIGIH 3.0

>Continuing the previous session's homework with this additional rule: <br>
>1. Make playlist as a model<br>
>2. Track song play count in the playlist<br>
>3. Add a feature to Get the list of songs to be sorted by most played

## Run Locally
run these codes on the terminal:
```
npm install
```
```
npm start
```

Test the server API using Postman with these URLs:<br>

Add a song to the playlist using HTTP `POST` method:
```
http://localhost:3000/playlist
```
Get all songs in the playlist (sorted by play counter) using HTTP `GET` method:
```
http://localhost:3000/playlist
http://localhost:3000/playlist?sort=most-played
```
Play a song in the playlist based on the song title using HTTP `POST` method:
```
http://localhost:3000/playlist/play
```
HTTP `Body` using JSON:
```
{  "title": "Song Title" }
```
---
Class FS_6 <br>
Muhammad Rizky Yusfian Yusuf<br>
GG3FSGP0456




