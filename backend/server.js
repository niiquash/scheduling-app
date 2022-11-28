require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('./middleware/corsMiddleware');

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors)
app.use('/', require('./routes'))

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started on port ${port}`));