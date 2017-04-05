import React from 'react';
import Header from './Header';


class App extends React.Component {
    state = {
        pageHeader: 'Naming Contests'
    };

    componentDidMount() {
        console.log('Did Mount');
        debugger;
    }

    componentWillMount() {
        console.log('Will Mount');
        debugger;
    }

    render() {
        return (
            <div>
                <Header message={ this.state.pageHeader }/>
                <div>
                    { this.state.test }
                </div>
            </div>
        );
    }
}

App.defaultProps = {
    headerMessage: 'Hi I am the default prop'
};

export default App;
