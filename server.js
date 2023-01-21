const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const colors = require('colors');
require('dotenv').config();
const port = process.env.PORT 
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/david-schwartz-portfolio";

const userRoutes = require('./routes/userRoutes.js');
const portfolioRoutes = require('./routes/portfolioRoutes.js');

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URI, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('\tDatabase Status: '.blue + 'Connected!\n'.rainbow));


app.use('/api/', userRoutes);
app.use('/api/', portfolioRoutes);


app.get('/', (req, res) => {
    console.log('Hello World');
    res.send('hello world')
})


app.listen(port, (req, res) => {
    console.log(`\n\nServer is listening on port: `.blue + `\n\n\thttp://localhost:`.green + `${port}\n\n`.yellow)
})
