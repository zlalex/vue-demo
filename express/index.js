const express = require('express');

const portSetting = require('../config/index');

const globalApi = require('../src/assets/scripts/globalApi');

const fakedata = require('./fakedata');

const server = express();

const port = portSetting.dev.port + 1;

server.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");　
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

server.get('/', (req, res, next) => {
    res.send('Hello Front End Developer!');
});

server.post('/' + globalApi.login, (req, res, next) => {
    res.send(fakedata.loginResponse);
});

server.listen(port, _ => {
    console.log('listen success!')
});