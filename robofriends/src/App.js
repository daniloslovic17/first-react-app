import React, { Component } from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchField from './SearchField'
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: 'robots',
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filteredRobots = robots.filter( robot => robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchField onSearchChange={this.onSearchChange} />
                <CardList robots={filteredRobots}/>
            </div>
        );
    };
}

export default App;