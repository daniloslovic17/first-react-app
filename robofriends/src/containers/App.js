import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchField from '../components/SearchField'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                    return response.json();
                }
            )
            .then(users => {
                this.setState({robots: users});
            })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
        if (!this.state.robots.length) {
            return (
                <h1 className='f1'>Loading</h1>);
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchField onSearchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    };
}

export default App;