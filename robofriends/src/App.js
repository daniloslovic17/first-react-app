import React, {Component} from 'react';
import CardList from './CardList';
import SearchField from './SearchField'
import './App.css'

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
        if (this.state.robots.length === 0) {
            return (
                <h1 className='f1'>Loading</h1>);
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchField onSearchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            );
        }
    };
}

export default App;