require('dotenv').config();
const express = require('express');
const { connect } = require('mongoose');
const connectDB = require('./config/db');

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started on port ${port}`));