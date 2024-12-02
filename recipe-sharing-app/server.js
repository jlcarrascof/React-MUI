const express = require('express')
const cors = require('cors')
const recipes = require('./db.json').recipes // Import recipes from db.json

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Let access from React
app.use(express.json());
