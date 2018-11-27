import React, { Component } from 'react';
import Card from './components/card';
import './App.css';

class App extends Component {
	render() {
		const pStyle = {
			textAlign: 'center',
			color: 'white'
		};

		return (
			<div className="App">
				<h1 style={pStyle}>Choose a Character</h1>
				<h3 style={pStyle}>This cannot be undone! Choose wisely.</h3>
				<div className="card-list">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		);
	}
}

export default App;
