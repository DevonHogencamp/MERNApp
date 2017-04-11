import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';


class App extends React.Component {
    state = {
        pageHeader: 'Naming Contests'
    };

    componentDidMount() {
        // AJAX reqs
    }

    componentWillMount() {
        // shutdown timers, remove event handlers
    }

    render() {
        return (
            <div>
                <Header message={ this.state.pageHeader }/>
                <div>
                    {this.props.contests.map((contest) =>
                        <ContestPreview key={contest.id} {...contest}/>
                    )}
                </div>
            </div>
        );
    }
}

App.defaultProps = {
    headerMessage: 'Hi I am the default prop'
};

export default App;
