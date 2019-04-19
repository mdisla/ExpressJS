var express = require('express');

var app = express();

const hello = (req,res) => res.send('Hello World!');

const listener = () => console.log('Example app listening on port 3000!');

app.get('/hello', hello);

app.listen(3000, listener);