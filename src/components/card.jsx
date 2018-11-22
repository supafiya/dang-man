import React, { Component } from 'react';
import './card.css';

class Card extends Component {
	state = {
		cardInfo: [
			{
				id: 1,
				cardName: 'Thug',
				cardRarity: 'Common',
				cardLevel: 1,
				cardRace: 'Human',
				cardClass: 'Warrior',
				cardGender: 'Male',
				cardStats: {
					health: 100,
					mana: 20,
					physAttack: {},
					physDefense: {},
					magicAttack: {},
					magicDefense: {}
				}
			}
		]
	};
	render() {
		const { cardName, cardGender, cardRace, cardClass, cardLevel } = this.state.cardInfo[0];
		return (
			<div className="card">
				<h2 className="card-name">{cardName}</h2>

				<div className="card-info">
					<span key="gender" className="gender info">
						{cardGender}
					</span>
					<span key="race" className="race info">
						{cardRace}
					</span>
					<span key="class" className="_class info">
						{cardClass}
					</span>
				</div>

				<span key="level" className="level">
					{cardLevel}
				</span>
			</div>
		);
	}
}

export default Card;
