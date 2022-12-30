const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5100;
const app = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set statix folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
