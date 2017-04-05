import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

setTimeout(() => {
    ReactDOM.render(
        <h2>I am the new element</h2>,
        document.getElementById('root')
    );
}, 4000);
