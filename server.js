import config from './config';
import apiRouter from './api';
import path from 'path';
import sassMiddleware from 'node-sass-middleware';

import express from 'express';
const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get('/', (req, res) => {
    serverRender().then(({initialMarkup, initialData}) => {
        res.render('index', {initialMarkup, initialData});
    }).catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
    console.info('Server listening on localhost:%s', config.port);
});
