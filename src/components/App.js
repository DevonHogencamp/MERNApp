import React from 'react';
import Header from './Header'


class App extends React.Component {
    constructor(props) {

    }

    return (
        <div>
            <Header message="Naming Contests"/>
            <div>
                More of the things
            </div>
        </div>
    );
};

App.defaultProps = {
    headerMessage: 'Hi I am the default prop'
};

export default App;
