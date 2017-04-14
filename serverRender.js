// Get the data from API and render for client
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import axios from 'axios';
import config from './config';

const serverUrl = config.protocol + config.host + ':' + config.port;

const serverRender = () => axios.get(serverUrl + '/api/contests').then(resp => {
    return {initialMarkup: ReactDOMServer.renderToString(<App initialContests={resp.data.contests}/>), initialData: resp.data}
}).catch(console.error);

export default serverRender;
