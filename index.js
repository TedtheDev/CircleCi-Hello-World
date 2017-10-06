const express = require('express');
const app = express();

const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/build/bundle.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build/bundle.js'));
});


const port = process.env.PORT || 8080;

app.listen(port, (req,res) => {
    console.log(`listening on ${port}`);
});