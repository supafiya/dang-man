import React, { Component } from 'react';
import Card from './components/card';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Card Game</h1>
				<h3>Check out the cards.</h3>
				<Card />
			</div>
		);
	}
}

export default App;
