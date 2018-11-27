import React, { Component } from 'react';
import CardFront from './card/card-front';
import CardBack from './card/card-back';
import './card.css';

function handleHover() {
	const card = document.querySelector('.card');
	const cardBack = document.querySelector('.card-whole-back');
	const cardFront = document.querySelector('.card-whole-front');

	card.classList.add('is-flipped');
	cardBack.classList.remove('hide-side');

	setTimeout(function() {
		cardFront.classList.add('hide-side');
	}, 200);
}

function handleNoHover() {
	const card = document.querySelector('.card');
	const cardBack = document.querySelector('.card-whole-back');
	const cardFront = document.querySelector('.card-whole-front');

	card.classList.remove('is-flipped');
	cardFront.classList.remove('hide-side');

	setTimeout(function() {
		cardBack.classList.add('hide-side');
	}, 200);
}

class Card extends Component {
	state = {};

	render() {
		return (
			<div className="scene" onMouseEnter={handleHover} onMouseLeave={handleNoHover}>
				<div className="card-whole card">
					<div className="card-whole-front card__face card__face--front">
						<CardFront />
					</div>
					<div className="card-whole-back card__face card__face--back hide-side">
						<CardBack />
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
