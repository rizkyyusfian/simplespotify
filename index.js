// dotenv.config();

// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import bodyParser from 'body-parser';
// import router from './routes/routes.js';

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/routes.js');
const cors = require('cors');



// Connect to the database
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const databse = mongoose.connection;

databse.on('error', (error) => console.log(error));
databse.once('connected', () => console.log('Connected to database'));

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});