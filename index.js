const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

// to respond to get request. Syntax: app.get(url, callback());
app.get('/', (req, res) => {
    res.send('Hello, world!')
});

// newsletter api
app.post('/api/newsletter', (req, res) => {
    console.log(req.body);
    // 200 - Successful request
    res.status(200).send('OK');
    return;
    
});

// set environment variable for port so that if changed they should be reflected
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})