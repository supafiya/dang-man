import React, { Component } from 'react';
import './card-front.css';

class CardFront extends Component {
	state = {
		cardInfo: {
			id: 1,
			cardName: 'Spike',
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
			},
			cardImgSrc: '../media/img/human_warrior_male.png'
		}
	};
	render() {
		const { cardName, cardRace, cardClass, cardLevel } = this.state.cardInfo;
		return (
			<div className="card-front">
				<h2 className="card-name">{cardName}</h2>

				<div className="card-info">
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

export default CardFront;
