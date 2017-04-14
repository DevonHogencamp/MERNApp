import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import ContestList from './ContestList';

class App extends React.Component {
    state = {
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    };
    componentDidMount() {}
    componentWillMount() {
    }
    render() {
        debugger;
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <ContestList contests={this.state.contests}/>
            </div>
        )
    }
}
App.prototypes = {
    initialContests: React.prototypes
};
export default App;
