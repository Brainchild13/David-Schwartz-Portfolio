const express = require('express');
const app = express();
const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config();
const bodyParser = require('body-parser');
const port = process.env.PORT 
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/david-schwartz-portfolio";

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URI, { useNewUrlParser: true })

app.listen(port, (req, res) => {
        console.log(`\n\nServer is listening on port: `.blue + `\n\n\thttp://localhost:`.green + `${port}\n\n`.yellow)
    })