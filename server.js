import config from './config';
import apiRouter from './api';
import path from 'path';

import express from 'express';

const server = express();

server.set('views', path.join(__dirname + '/views'));
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: '<h1>Hello react and EJS</h1>'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Server listening on localhost:' + config.port);
});
