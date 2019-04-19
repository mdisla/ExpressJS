var express = require('express');

var app = express();

const bootstrap = require('./src/bootstrap');

const route = express.Router();
app.use(route);

bootstrap(app, route);

const listener = () => console.log('Listening on port 3000');


app.listen(3000, listener);