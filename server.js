import config from './config';
import fs from 'fs';

import express from 'express';

const server = express();

server.get('/', (req, res) => {
    res.send('Hellow Express');
});

server.listen(config.port, () => {
    console.info('Server listening on localhost:' + config.port);
});
