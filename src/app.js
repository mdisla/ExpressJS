var express = require('express');

var app = express();

const bootstrap = require('./bootstrap');

const route = express.Router();
app.use(route);

bootstrap(app, route);

// Server Configuration

const PORT = 3000;
const listener = () => console.log(`Listening on port ${PORT}`);
app.listen(PORT, listener);